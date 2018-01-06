import React, { Component } from 'react';
import * as firebase from 'firebase';
import './styles.css'
import './privatechat.css'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Avator from './avator.js'



class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            selectedUser: {},
            me: {},
            messages: [],
            message: "",
            myData: {}
        }
    }
    componentDidMount() {
        let me = firebase.auth().currentUser;
        if (!me) {
            me = localStorage.getItem("uid");
        } else {
            me = me.uid
        }
        firebase.database().ref(`Sign Up/${me}`).once("value", (snap) => {
            this.setState({ myData: snap.val() })
        })
        firebase.database().ref('/Sign Up').on("value", (snap) => {
            const data = snap.val();
            let users = []
            for (let key in data) {
                const obj = data[key];
                obj['uid'] = key;
                users.push(obj)
            }
            this.setState({ users, me: me });
        })

    }

    openChat(user, index, event) {
        firebase.database()
            .ref(`/messages/${this.state.me}/${user.uid}`)
            .on("value", (snap) => {
                const data = snap.val();
                let messages = []
                for (let key in data) {
                    messages.push(data[key])
                }
                this.setState({ messages });
            })
        this.setState({ selectedUser: user });
    }

    changeHandler(event) {
        this.setState({ message: event.target.value });
    }
    sendMessage() {
        const timestamp = firebase.database.ServerValue.TIMESTAMP;
        firebase.database()
            .ref(`/messages/${this.state.me}/${this.state.selectedUser.uid}`)
            .push({
                sender: this.state.me,
                message: this.state.message,
                timestamp: timestamp
            });

        firebase.database()
            .ref(`/messages/${this.state.selectedUser.uid}/${this.state.me}`)
            .push({
                sender: this.state.me,
                message: this.state.message,
                timestamp: timestamp
            })
    }
    render() {
        // const users = this.state.users;
        // const messages = this.state.messages;
        // const selectedUser = this.state.selectedUser;
        // const myData = this.state.myData;
        const { users, messages, selectedUser, myData } = this.state;
        return (
      <div>
        <AppBar title={<span>Welcome to Geeks of Kolachi Private Chat</span>}
  />
            <div style={{ display: 'flex', justifyContent: 'space-around', height: window.screen.availHeight }}>
    
                <div style={{ width: "30%", border: '1px solid gray' }}>
                <AppBar title={<span>User's</span>}
  />
                    <ul>
                        {
                            users.map((user, index) => {
                                return <li key={index} onClick={this.openChat.bind(this, user, index)}> <hr />  {user['name']}</li>
                            })
                        }
                    </ul>
                </div>
                <div style={{ width: "70%", border: '1px solid green' }}>
                <h3>Conversation</h3>    
                                <div>
                        <ul>
                            {
                                messages.map((msg, index) => {
                                    return <li key={index}>
                                        <span>{(selectedUser.uid == msg.sender) ? selectedUser.name : myData.name}</span>
                                      <br />  <span>{msg.message}</span><br/> <span>{(new Date(msg.timestamp)).toString()}</span></li>
                                })
                            }
                        </ul>
                
                    </div>
                   < div className="fields" >   
                       <TextField hintText="Your Message" fullWidth={true}  onChange={this.changeHandler.bind(this)}
/>
                        {/* <button onClick={this.sendMessage.bind(this)}>Send</button>  */}
                        <FlatButton  className="button" label="Send Your Message"  primary={true} onClick={this.sendMessage.bind(this)} /> 
           
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Dashboard;

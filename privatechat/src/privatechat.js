import React, { Component } from 'react';
import * as firebase from 'firebase';
// import img from './src/images';
import IMG from './images/img.png';
import './styles.css'
import './privatechat.css'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Avator from './avator.js'
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Avatar from 'material-ui/Avatar';



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

    search() {
        var input, filter, ul, listItem, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        listItem = ul.getElementsByTagName("ListItem");
        for (i = 0; i < ListItem.length; i++) {
            a = ListItem[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                ListItem[i].style.display = "";
            } else {
                ListItem[i].style.display = "none";
    
            }
        }
    }








    render() {
        // const users = this.state.users;
        // const messages = this.state.messages;
        // const selectedUser = this.state.selectedUser;
        // const myData = this.state.myData;
        const { users, messages, selectedUser, myData } = this.state;
        return (
      <div>
        <AppBar title={<span>Welcome to Geeks of Kolachi Private Chat</span>} iconElementRight={<FlatButton secondary={true}onClick={this.signOut} label="SignOut" />
                     }/>
  
            <div style={{ display: 'flex', justifyContent: 'space-around', height: window.screen.availHeight }}>
    
                <div style={{ width: "30%", border: '1px solid gray' }}>
                {/* <AppBar title={<span>User's</span>}
  /> */}        <h3>Users</h3>
                    <input type="text" id="myInput" onkeyup="search()" placeholder="Search for names.." title="Type in a name"/>
                   <ul id="myUL">
                       
                        {
                            users.map((user, index) => {
                                return <ListItem key={index}          leftAvatar={<Avatar src={IMG} />}
                                rightIcon={<CommunicationChatBubble />}
                                onClick={this.openChat.bind(this, user, index)}>   {user['name']}</ListItem>
                            })
                        }
                    </ul>
                </div>
                <div style={{ width: "70%", border: '1px solid green' }}>
             <h3>Conversation</h3>
                <h4> {this.state.selectedUser.name}</h4>    
                                <div   >
                        <ul  >
                            {
                                messages.map((msg, index) => {
                                    return <div > <ListItem key={index} className="view"   leftAvatar={<Avatar  size={30}   src={IMG} />}   > 
                                        <span>{(selectedUser.uid == msg.sender) ? selectedUser.name : myData.name}</span>
                                      <br />  <span>{msg.message}</span><br/> <span>{(new Date(msg.timestamp)).toString()}</span></ListItem> </div>
                                })
                            }
                        </ul>
                
                    </div>
                    
                   < div className="fields" >   
                       <TextField hintText="Your Message" fullWidth={true}  onChange={this.changeHandler.bind(this)}
/>
                        {/* <button onClick={this.sendMessage.bind(this)}>Send</button>  */}
                        <FlatButton  className="button1" label="Send Your Message"  primary={true} onClick={this.sendMessage.bind(this)} /> 
             
           </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Dashboard;

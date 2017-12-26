import React, { Component } from 'react';
//import logo from './logo.svg';
import * as firebase from 'firebase';
//import './App.css';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
//import GridListExampleSimple from './abc.js';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Logout from "./logout";

const ref = firebase.database().ref();



class User extends Component {

  constructor() {
    super();
    this.state = {
      todo: '',
      allTodos:[]
    }
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClick(){

firebase.auth().signOut().then(() => {
  // Sign-out successful.
   console.log(" Sign-out successful.")
}).catch(function(error) {
  console.log(error);
});
this.props.history.push('/');
   }




  componentDidMount() {
    const self = this;
    // ref.child("newtodo").on("value", function(wayn) {
       ref.on("value", function(snapshot) {


        const data = snapshot.val();
      if(data){
        let allTodos = [];
        for(let key in data){
          const obj = {
            name: data[key].name,
            key: key
        }
          allTodos.push(obj)
        }
        self.setState({allTodos:allTodos})
  
      }
    })
  }

    
  

  // delete(data){
  //   const newState = this.state.allTodos;
  //   if (newState.indexOf(data) > -1) {
  //     newState.splice(newState.indexOf(data), 1);
  //     this.setState({allTodos: newState})
  //   }
  // }
   delete(data, event){
     console.log(data);
  ref.child(data.key).remove();

}



  changeHandler(event) {
    this.setState({todo: event.target.value})
  }

  save() {
    //ref.child("newtodo").push({name: this.state.todo});
    ref.push({name: this.state.todo});
    
  }

  render() {
    
    return (
      <div className="App">
  <AppBar
    title="React-Public-Chat-App"
    iconElementRight={<FlatButton label="Log out" onClick={(event) => this.handleClick(event)}/>}
  />
          <div className="chat">
          <ul>
           {this.state.allTodos  &&  this.state.allTodos.map((data, index)  => {
            return <li key={index}>{data.name}<span style={{margin:"500px"}}></span>  <FlatButton  primary={true}  onClick={this.delete.bind(this, data)}>X</FlatButton></li>
            })}
          </ul>
          <div className="inputbutton">
          <input type="text" className="inputBox" value={this.state.todo} onChange={this.changeHandler.bind(this)} />
         {/* <button onClick={this.save.bind(this)}>User</button>  */}
          <FlatButton  className="button" label="Send Your Message"  primary={true} onClick={this.save.bind(this)} /> 
            </div>
          </div>
      </div>
    );
  }
}

export default User;


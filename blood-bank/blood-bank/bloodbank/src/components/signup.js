import React from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 import injectTapEventPlugin from 'react-tap-event-plugin';
 injectTapEventPlugin();

 



export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
    this.state = {
      userPass: "",
      userEmail: "",
      error: ""
    }
  }

  signUp(ev) {
    ev.preventDefault();

    var userPass = this.refs.pass.getValue();
    var userEmail = this.refs.email.getValue();
    var error = this.refs.demo;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(userEmail, userPass);
    promise.then((user) => {
    console.log("Signup succesfully");
    alert("Signup succesfully");
    browserHistory.push('/signin');
    })
    promise.catch(e => error.innerHTML = e.message);

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser);
      }
      else {
        console.log('not logged in');
        alert('not logged in');
      }
    });
  }

  render() {
    return (
      
          <MuiThemeProvider>
      <center>
          <div>
          {/* <AppBar title="G O K Blood Bank"     iconClassNameRight="muidocs-icon-navigation-expand-more" />
    */}
                   
        <h1>Sign Up</h1>
        <p ref="demo" ></p>
        <form onSubmit={this.signUp}>
          <TextField hintText="First Name" floatingLabelText="First Name" required="required" />
          <br />
          <TextField hintText="Last Name" floatingLabelText="Last Name"  required="required"  />
          <br />
           <TextField hintText="Email" floatingLabelText="Email" ref="email" required="required"  />
          <br />
          <TextField hintText="Password Field" floatingLabelText="Password" type="password"  ref="pass" required="required"  />
          <br /><br /><br />
          <RaisedButton type="submit" primary={true}>Submit</RaisedButton>
        </form>
      </div>
      </center>
          </MuiThemeProvider>

      
    )
  }
}

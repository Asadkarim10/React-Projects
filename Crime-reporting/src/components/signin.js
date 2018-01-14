import React from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';



class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.state = {
      userPass: "",
      userEmail: ""
    }
  }

  signIn(ev) {
    ev.preventDefault();

    var userPass = this.refs.pass.getValue();
    var userEmail = this.refs.email.getValue();
    console.log(userEmail);
    console.log(userPass);
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(userEmail, userPass);
    promise.then((user) => {
console.log("Signin succesfully");
    browserHistory.push('/main');
    })
    promise.catch(e => console.log("ERROR: ",e.message));
  }









  render() {
    return (
<MuiThemeProvider>
  <center>
      <div>
        
        <h1>Sign In</h1>

        <form onSubmit={this.signIn}>
           <TextField hintText="Email" type="email" floatingLabelText="Email" ref="email" />
          <br />
          <TextField hintText="Password Field" floatingLabelText="Password" type="password"  ref="pass"/>
          <br /><br /><br />
          <RaisedButton type="submit" primary={true}>Submit</RaisedButton>

          {/*<button>Submit</button>*/}
        </form>
      </div>
      </center>
</MuiThemeProvider>

    );
  }
}


export default Signin;

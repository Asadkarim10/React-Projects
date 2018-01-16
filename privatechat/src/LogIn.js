import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
import * as firebase from 'firebase'
const ref = firebase.database().ref();

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }
    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    login() {
        console.log("start authentication.")
        const self = this;
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(function (data) {
                console.log(data);
                console.log("inside of authentication success.")
                localStorage.setItem("uid",data.uid);
                self.props.history.push('/privatechat')
            })
            .catch(function (error) {
                // Handle Errors here.
                console.log("inside of authentication error.")
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error);
            })
        console.log("end authentication.")
        console.log("outside of authentication.")
    }
   
    render() {

        return (
            <div >
                <form >
                <h2>Login</h2>
                Email
                <input type="text" value={this.state.email}  name="email" onChange={this.changeHandler.bind(this)} /><br />
                Password
                <input type="text" value={this.state.password} name="password" onChange={this.changeHandler.bind(this)} /><br />
                <button onClick={this.login.bind(this)}>Login</button>
                <Link to={'/'}>Not a user? Sign Up instead</Link>
                </form>
            </div>
        );
    }
}

export default Login;

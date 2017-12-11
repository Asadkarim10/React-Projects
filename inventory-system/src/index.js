import React from 'react';
import ReactDOM from 'react-dom';
//import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import { Link, Router, browserHistory, Route, IndexRoute } from 'react-router';
import * as firebase from 'firebase';
//import Signin from './component/signin';
//import SignUp from './component/signup';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var config = {
    apiKey: "AIzaSyDEtCLhq3k8M1uyMnDkmpUXTQuV0KQDN9c",
    authDomain: "familytracker-f0e13.firebaseapp.com",
    databaseURL: "https://familytracker-f0e13.firebaseio.com",
    projectId: "familytracker-f0e13",
    storageBucket: "familytracker-f0e13.appspot.com",
    messagingSenderId: "823081444225"
  };
  firebase.initializeApp(config);



ReactDOM.render(<MuiThemeProvider> <App /> </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();

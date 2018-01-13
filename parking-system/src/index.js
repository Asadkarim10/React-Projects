import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAEkT5mHaoaANCmhppvPuaZAGTsQ-gUw74",
    authDomain: "parking-app-5453e.firebaseapp.com",
    databaseURL: "https://parking-app-5453e.firebaseio.com",
    projectId: "parking-app-5453e",
    storageBucket: "",
    messagingSenderId: "871054969621"
  };
  firebase.initializeApp(config);
injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));

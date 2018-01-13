import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, browserHistory, Route, IndexRoute } from 'react-router';
import * as firebase from 'firebase';
import Signin from './components/signin';
import Signup from './components/signup';
import Main from './components/main';
import DonateForm from './components/donateform';
import Thanks from './components/thankx';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from './components/appbar';
import './index.css';
<script src="https://www.gstatic.com/firebasejs/3.7.0/firebase.js"></script>

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyD5-VGhuwkxFWNqIKqlYxZiADPf7QLAOf4",
  authDomain: "bloodbank-3987c.firebaseapp.com",
  databaseURL: "https://bloodbank-3987c.firebaseio.com",
  projectId: "bloodbank-3987c",
  storageBucket: "bloodbank-3987c.appspot.com",
  messagingSenderId: "581835373343"
};
firebase.initializeApp(config);

class Home extends React.Component {
  
    render() {
      return (
        <div>
          <MuiThemeProvider>
  <center>
        <div>
          <h1>Home</h1>
          <Link to="/signin"><RaisedButton type="submit" primary={true} style={{margin: 12}}>Log In</RaisedButton></Link>
          <Link to="/signup"><RaisedButton type="submit" primary={true} style={{margin: 12}}>Sign Up</RaisedButton></Link>

          <footer>
            <div>
                   <p>Posted by Asad Karim</p>
                   <p>Contact information: <a href="mailto:asadkarim33@gmail.com">
                  asadkarim33@gmail.com.</a></p>
              </div>
              {this.props.children}
              </footer>
        </div>
  </center>
        </MuiThemeProvider>
  
        
        </div>
      )
    }
  }
  
  
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={AppBarExampleIcon}>
        <IndexRoute component={Home} />
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/main" component={Main}/>
        <Route path="/donateform" component={DonateForm}/>
        <Route path="/thankx" component={Thanks}/>
      </Route>

      <footer>
                   <p>Posted by Asad Karim</p>
                   <p>Contact information: <a href="mailto:asadkarim33@gmail.com">
                  asadkarim33@gmail.com.</a></p>
              </footer>
    </Router>
    ,
    document.getElementById('root')
  );

//asadkarim3333@gmail.com
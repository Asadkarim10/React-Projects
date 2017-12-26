import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import Home from './Components/Home';
import SignUp from './Components/signup';
import User from './Components/User';
 import{
BrowserRouter as Router,
Route,
Link
}from 'react-router-dom';

class App extends Component {
    constructor(){
     super()
     this.state={
       user:null,
     }

    }


 componentDidMount(){
    firebase.auth().onAuthStateChanged(()=>{
      
      this.setState({
          user: firebase.auth().currentUser
      })
    })
  }
  render() {
    
    return (
      <div className="App">
        <Router>
          <div>
         <Route exact path="/" component ={Home}/>
         <Route path="/SignUp" component={SignUp}/>
         <Route path="/User" component={User}/> 
        
    
            <footer>
                   <p>Posted by Asad Karim</p>
                   <p>Contact information: <a href="mailto:asadkarim33@gmail.com">
                  asadkarim33@gmail.com.</a></p>
              </footer>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;

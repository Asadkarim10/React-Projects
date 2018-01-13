import React from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import './appbar.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class AppBarExampleIcon extends React.Component{
 
 
    signout(ev) {
        ev.preventDefault();
        firebase.auth().signOut().then(function () {
            console.log("Sign-out successful.");
            browserHistory.push('/');
        }, function (error) {
            console.log("An error happened.");
        });
    }
 
 
 
    render(){
        return(
            <div className="center">
                <MuiThemeProvider>
                    <div>
                     <AppBar title="G O K Blood Bank"     iconElementRight={<FlatButton secondary={true}onClick={this.signout} label="Sign Out" />
                     }/> 
                     {/* <RaisedButton primary={true} onClick={this.signout} label="Sign Out" /> */}
       
                    </div>
                </MuiThemeProvider>
                 {this.props.children} 
            </div>
        )
    }
}
  


export default AppBarExampleIcon;
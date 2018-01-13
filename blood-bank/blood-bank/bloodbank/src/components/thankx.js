import React from 'react';
import {Link} from 'react-router';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class Thanks extends React.Component{
 
 
 
 
 
    render(){
   

        return (
            <div>
       
                   
                <MuiThemeProvider>
                <AppBar title="G O K Blood Bank"     iconClassNameRight="muidocs-icon-navigation-expand-more"  />

                    <div>
                <center>
                <h1>Thanks for donation...!</h1>
                </center>
        <Link to="/main"><RaisedButton primary={true} style={{margin: 12}}>Home</RaisedButton></Link>
        <RaisedButton primary={true} onClick={this.signout} label="Sign Out" />

                </div>
            </MuiThemeProvider>
            </div>
        )
    }
}
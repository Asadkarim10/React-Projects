import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Thanks extends React.Component{
    render(){
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                <center>
                <h1>Your Report has been submitted...!</h1>
                </center>
        <Link to="/main"><RaisedButton primary={true} style={{margin: 12}}>Home</RaisedButton></Link>
                </div>
            </MuiThemeProvider>
            </div>
        )
    }
}
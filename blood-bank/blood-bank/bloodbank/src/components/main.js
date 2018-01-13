import React from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Person from 'material-ui/svg-icons/social/person';
import * as MUI from 'material-ui'
import AppBar from 'material-ui/AppBar';



export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 1,
            donors: []
        };

    }
    handleBgroup(e, key) {
        e.preventDefault();
        var don = [];
        this.setState({ value: 1 + key});
        var blood = e.target.childNodes[0].nodeValue;
        
        
        var b = blood;
        var a = [];
        switch (b) {
            case "A+":
                a.push(['A+', 'O+', 'A-', 'O-']);
                
                break;

            case "B+": {
            a.push(['B+', 'O+', 'B-', 'O-']);
                break;
            }
            case "AB+": {
                a.push(['AB+', 'AB-','O+','O-','A+','A-','B+','B-']);
                break;
            }
            case "O+":{
                a.push(['O+', 'O-']);
                break;
            }
            case "A-":{
                a.push(['A-', 'O-']);
                break;
            }
            case "B-":{
                a.push(['B-', 'O-']);
                break;
            }
            case "AB-":{
                a.push(['AB-', 'O-','A-','B-']);
                break;
            }
            case "O-":{
                a.push(['O-']);
                break;
            }
        
    }

a.map((v,i) => {
    return v.map((value,index)=>{
                            
        // console.log(v);
 firebase.database().ref('/bloodgrp/' + value + '/' ).on('value', (data) => {
                let obj = data.val();
                // console.log(obj);
                for (var prop in obj){

                  
                  
                don.push(obj[prop].newDonor);
                  console.log(don);
      
        this.setState({
          donors : don
        })
        // console.log(this.state.donors);
          }


       })  

})


})
//  console.log(this.state.donors);


    }


    signout(ev) {
        ev.preventDefault();
        firebase.auth().signOut().then(function () {
            console.log("Sign-out successful.");
            browserHistory.push('/');
        }, function (error) {
            console.log("An error happened.");
        });
    }


 

    donateForm(ev) {
        ev.preventDefault();
        browserHistory.push('/donateform');
    }


    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
              
   
                        <h1>Home Page</h1>
                        <RaisedButton primary={true} onClick={this.donateForm} style={{margin: '5px'}} label="Donate Blood" />
                        {/* <RaisedButton primary={true} onClick={this.signout} label="Sign Out" /> */}
                        <br />
                        <p style={{fontSize: '20px'}}>Select your Blood Group </p>
                        <DropDownMenu value={this.state.value} onChange={this.handleBgroup.bind(this)} style={{}} ref="blood"  >
                            <MenuItem value={1} primaryText="Blood Group" disabled />
                            <MenuItem value={2} primaryText="A+" />
                            <MenuItem value={3} primaryText="B+" />
                            <MenuItem value={4} primaryText="AB+" />
                            <MenuItem value={5} primaryText="O+" />
                            <MenuItem value={6} primaryText="O-" />
                            <MenuItem value={7} primaryText="AB-" />
                            <MenuItem value={8} primaryText="B-" />
                            <MenuItem value={9} primaryText="A-" />
                        </DropDownMenu>
                        <br />
                       <center> <p style={{fontSize: '20px'}}>Available Donors: </p> </center>
                                                                    
                        {this.state.donors.map((m, i) =>
                        <div>
                            <br /><br />
                                <MUI.Card>
                                <MUI.CardHeader
                                    title={m.name}
                                    subtitle={m.blood}
                                    avatar={<MUI.Avatar icon={<Person />}/>}
                                />
                                <MUI.CardText >
                                    
                                    <div><b>Email :</b> {m.email}</div>
                                    <div><b>Weight :</b> {m.weight} kg</div>
                                    <div><b>Address :</b> {m.address}</div>
                                    <div><b>Number :</b> {m.number}</div>
                                </MUI.CardText>
                                </MUI.Card>
                        </div>
                        )}
             
                </div>
                </MuiThemeProvider>
            </div>
        )
    }
}
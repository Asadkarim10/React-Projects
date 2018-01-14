import React from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Person from 'material-ui/svg-icons/social/person';
import * as MUI from 'material-ui'




export default class Main extends React.Component {
    constructor(props) {
        super(props);

            this.state = {
        value: 1,
        crime: '',
        crimeReports: [],
        missingReports: []
  
    };



}

    componentWillMount(){
        var crimereports = [];
        var missingreports = [];
        console.log(crimereports);
        firebase.database().ref('/crimesystem/crimereport' + '/' ).on('value', (data) => {
                let obj = data.val();
                // console.log(obj);
                for (var prop in obj){
                crimereports.push(obj[prop].newCrimeReport);
                //   console.log(reports);
                  this.setState({
                      crimeReports: crimereports
                  })
    }
        })
        firebase.database().ref('/crimesystem/missingreport' + '/' ).on('value', (data) => {
                let obj = data.val();
                // console.log(obj);
                for (var prop in obj){
                missingreports.push(obj[prop].newMissingReport);
                //   console.log(reports);
                  this.setState({
                      missingReports: missingreports
                  })
    }
        })
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


 

    crimeReportForm(ev) {
        ev.preventDefault();
        browserHistory.push('/crimeform');
    }
    missingReportForm(ev){
        ev.preventDefault();
        browserHistory.push('/missingreportform');
    }
complaintForm(ev){
        ev.preventDefault();
        browserHistory.push('/complaintform');
    }
    complaint(ev){
        ev.preventDefault();
        browserHistory.push('/complaints');
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <center>
                    <RaisedButton primary={true} onClick={this.crimeReportForm} style={{margin: '5px'}} label="Post a Crime Report" />
                    <RaisedButton primary={true} onClick={this.missingReportForm} style={{margin: '5px'}} label="Post a Report for missing person" />
                    <RaisedButton primary={true} onClick={this.complaintForm} style={{margin: '5px'}} label="Post a Complaint" />
                    <RaisedButton primary={true} onClick={this.complaint} label="Your Complaints" />
                    <br />
                    <RaisedButton primary={true} onClick={this.signout.bind(this)} label="Sign Out" />
                    </center>
                    

                        <br /><br /><br /><br /><br />
                        <h1>Recent Crime Reports </h1>
                        <div className="container">


                        {/*{this.state.crimeReports.map((m, i) =>
                        
                         
                        <table className="table table-striped">
                            <tr><td><h4 style={{color: 'red'}}>Crime report  # {i+1}</h4></td></tr>
                            <tr key={i}>
                            <td><b>Posted by:</b>   {m.name}</td></tr>
                            <tr><td><b>City:</b>    {m.city}</td></tr>
                            <tr><td><b>Nature of Crime: </b>    {m.crime}</td></tr>
                            <tr><td>Date: {}</td></tr>
                            <tr><td><b>Description of this Crime: </b>   {m.description}</td></tr>
                            
                            <br />
                        </table>
                        
                        )}*/}



                    {this.state.crimeReports.map((m, i) =>
                                            <div>
                                                <br />
                                                <h4 style={{color: 'red'}}>Report  # {i+1}</h4>
                                                <br />
                                                    <MUI.Card>
                                                    <MUI.CardHeader
                                                        title={m.crime}
                                                        subtitle={m.city}
                                                        avatar={<MUI.Avatar icon={<Person />}/>}
                                                    />
                                                    <MUI.CardText >
                                                        
                                                        <div><b>Posted by:</b>   {m.name}</div>
                                                        <div><b>Nature of Crime: </b>    {m.crime}</div>
                                                        <div><b>Date : </b>    {m.date}</div>
                                                        <div><b>Description of this Crime: </b>   {m.description}</div>
                                                    </MUI.CardText>
                                                    </MUI.Card>
                                            </div>
                                            )}







                </div>
                <h1>Recent Missing Persons</h1>
                <div className="container">
                        {/*{this.state.missingReports.map((m, i) =>

                        <table className="table table-striped">
                            <tr><td><h4 style={{color: 'red'}}>Report  # {i+1}</h4></td></tr>
                            <tr key={i}>
                            <td><b>Posted by: </b>   {m.name}</td></tr>
                            <tr><td><b>Email: </b>   {m.email}</td></tr>
                            <tr><td><b>City:</b>   {m.city}</td></tr>
                            <tr><td><h5><b>Missing Person's Detail:</b></h5></td></tr>
                            
                            
                            <tr><td><b>Name: </b>   {m.namemp}</td></tr>
                            <tr><td><b>Age: </b> {m.agemp}</td></tr>
                            <tr><td><b>Height: </b>{m.heightmp}</td></tr>
                            <tr><td><b>Unique Sign: </b>{m.usmp}</td></tr>
                            
                            <br />
                        </table>
                        
                        )}*/}


                        {this.state.missingReports.map((m, i) =>
                                            <div>
                                                <br />
                                                <h4 style={{color: 'red'}}>Report  # {i+1}</h4>
                                                <br />
                                                    <MUI.Card>
                                                    <MUI.CardHeader
                                                        title={m.namemp}
                                                        subtitle={m.city}
                                                        avatar={<MUI.Avatar icon={<Person />}/>}
                                                    />
                                                    <MUI.CardText >
                                                        
                                                        <div><b>Posted by:</b>   {m.name}</div>
                                                        <div><b>Email: </b>   {m.email}</div>
                                                        <div><b>Date : </b>    {m.date}</div>
                                                        <div><h5><b>Missing Person's Detail:</b></h5></div>
                                                        <div><b>Name: </b>   {m.namemp}</div>
                                                        <div><b>Age: </b> {m.agemp}</div>
                                                        <div><b>Height: </b>{m.heightmp}</div>
                                                        <div><b>Unique Sign: </b>{m.usmp}</div>
                                                    </MUI.CardText>
                                                    </MUI.Card>
                                            </div>
                                            )}
                </div>
                </div>
                </MuiThemeProvider>
            </div>
        )
    }
}
import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import DatePicker from 'material-ui/DatePicker';



export default class CrimeForm extends React.Component{
 constructor(props) {
    super(props);

    this.state = {
        value: 1
  
    };
  }



    submit(e){
        e.preventDefault();
        
        const newCrimeReport = {
         name : this.refs.name.getValue(),
         email : this.refs.email.getValue(),
         city : this.refs.city.getValue(),
         address : this.refs.address.getValue(),
         description: this.refs.descrp.getValue(),
         crime : this.refs.crime.getValue(),
         date : this.refs.date.getValue()
        }
        console.log(newCrimeReport);

let currentUser = firebase.auth().currentUser;
    console.log(currentUser.uid);
    firebase.database().ref('crimesystem/' + '/' + 'crimereport' + '/'  ).push({newCrimeReport})

    browserHistory.push('/thanks');
    }



    render(){
        return(
            <div>          
            <MuiThemeProvider>
<center>
      <div>
        
            <h1>Crime Report</h1>

        <form onSubmit={this.submit.bind(this)}>
           <TextField hintText="Your Good Name" type="name" floatingLabelText="Name" ref="name" required="required"/>
          <br />
           <TextField hintText="Email Address" floatingLabelText="Email" type="email" required="required" ref="email" />
           <br />
          <TextField hintText="City" floatingLabelText="City" textTransform="capitalized" required="required"  ref="city"/>          
          <br />
          <TextField hintText="Your Address" floatingLabelText="Address" type="commentbox" required="required" ref="address"/>
          <br  />
          {/* <DatePicker hintText="Date" ref="date"  required="required" /> */}
          <br />
            <TextField hintText="Nature of Crime" floatingLabelText="Nature of Crime" type="commentbox" required="required" ref="crime"/>
            <br /><br />
        <TextField hintText="Please clearly describe the violation of federal criminal laws. Include as much information as possible. including the dates, places and nature of incidents, and contact information for any witnesses."
        type="textarea" multiLine={true} rows={6} required="required" ref="descrp"/>
        <br /><br />
          <RaisedButton type="submit" primary={true}>Submit</RaisedButton>

        </form>
      </div>
      </center>
</MuiThemeProvider>
</div>
        )
    }
}
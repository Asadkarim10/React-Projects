import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'; 
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';



export default class CrimeForm extends React.Component{
 constructor(props) {
    super(props);
 }


    submit(e){
        e.preventDefault();
        
        const newComplaint = {
         name : this.refs.name.getValue(),
         email : this.refs.email.getValue(),
         city : this.refs.city.getValue(),
         address : this.refs.address.getValue(),
         description: this.refs.complaint.getValue(),
         
        }
        console.log(newComplaint);

let currentUser = firebase.auth().currentUser;
    console.log(currentUser.uid);
    firebase.database().ref('crimesystem/complaints/' + currentUser.uid + '/'  ).push({newComplaint})

    browserHistory.push('/thanks');
    }


    render(){
        return(
            <div>          
            <MuiThemeProvider>
<center>
      <div>
        
            <h1>Complaint Form</h1>

        <form onSubmit={this.submit.bind(this)}>
           <TextField hintText="Your Good Name" type="name" floatingLabelText="Name" ref="name" required="required" />
          <br />
           <TextField hintText="Email Address" floatingLabelText="Email" ref="email" type="email" required="required" />
           <br />
          <TextField hintText="City" floatingLabelText="City"  ref="city" required="required"/>          
          <br />
          <TextField hintText="Your Address" floatingLabelText="Address" type="commentbox"  ref="address" required="required"/>
          <br  />
          
        <TextField hintText="Write your complain here." type="textarea" multiLine={true} rows={2}   ref="complaint" required="required" />
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
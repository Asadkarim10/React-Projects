import React from 'react';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';



export default class DonateForm extends React.Component{
 constructor(props) {
    super(props);

    this.state = {
        value: 1,
        blood: '',
  
    };
  }



    submit(e){
        e.preventDefault();
        
        const newDonor = {
         name : this.refs.name.getValue(),
         email : this.refs.email.getValue(),
         weight : this.refs.weight.getValue(),
         address : this.refs.address.getValue(),
         number : this.refs.number.getValue(),
         blood : this.state.blood
        }
        console.log(newDonor);

let currentUser = firebase.auth().currentUser;
    console.log(currentUser.uid);
    firebase.database().ref('bloodgrp/' + this.state.blood + '/'  ).push({newDonor})

    browserHistory.push('/thankx');
    }

    handleBgroup(e,key){ 
    e.preventDefault();
    this.setState({value: key+1,
    blood: e.target.childNodes[0].nodeValue});
    console.log(this.state.blood);
}

    render(){
        return(
            <div>          
            <MuiThemeProvider>
<center>
      <div>
      {/* <AppBar title="G O K Blood Bank"     iconClassNameRight="muidocs-icon-navigation-expand-more" />
    */}
   
            <h1>Donor Form</h1>

        <form onSubmit={this.submit.bind(this)}>
           <TextField hintText="Your Good Name" type="name" floatingLabelText="Name" ref="name" required="required" />
          <br />
           <TextField hintText="Email Address" floatingLabelText="Email" ref="email"  required="required"/>
           <br />
          <TextField hintText="Your Wieght" floatingLabelText="Weight" type="number"  ref="weight" required="required"/>          
          <br />
          <TextField hintText="Your Address" floatingLabelText="Address" type="commentbox"  ref="address" required="required"/>
          <br  />
          <TextField hintText="Your number" floatingLabelText="number" type="number"  ref="number" required="required"/>
          <br />
          <DropDownMenu value={this.state.value} onChange={this.handleBgroup.bind(this)} ref="blood"  style={{width: 200}} required="required">
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

        <br /><br />
          <RaisedButton type="submit" primary={true}>Submit</RaisedButton>
          <Link to="/main"><RaisedButton primary={true} style={{margin: 12}}>Back</RaisedButton></Link>


        </form>
      </div>
      </center>
</MuiThemeProvider>
</div>
        )
    }
}
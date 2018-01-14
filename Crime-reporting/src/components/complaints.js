import React from 'react';
import * as firebase from 'firebase';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export default class Complaints extends React.Component{
     constructor(props) {
        super(props);

            this.state = {
        value: 1,
        complaints: []
  
    };
}

componentWillMount(){
        var complaints = [];


        var auth = firebase.auth().currentUser;
        firebase.database().ref('/crimesystem/complaints' + '/' + auth.uid + '/' ).on('value', (data) => {
                let obj = data.val();
                // console.log(obj);
                for (var prop in obj){
                complaints.push(obj[prop].newComplaint);
                //   console.log(reports);
                  this.setState({
                      complaints: complaints
                  })
                  console.log(this.state.complaints);
    }
        })
}


render(){
    return(
        <div>
            <MuiThemeProvider>
                    <div>
        <Link to="/main"><RaisedButton primary={true} style={{margin: 12}}>Home</RaisedButton></Link>
                </div>
            </MuiThemeProvider>
            <h1>Your Complaints </h1>
                        <div className="container">


                        {this.state.complaints.map((m, i) =>
                        
                         
                        <table className="table table-striped">
                            <tr><td><h4>Complaint  # {i+1}</h4></td></tr>
                            <tr key={i}>
                            <td><b>Your Name:</b>   {m.name}</td></tr>
                            <tr><td><b>Your City:</b>    {m.city}</td></tr>
                            <tr><td><b>Your Address:  </b>    {m.crime}</td></tr>
                            <tr><td>Date: {}</td></tr>
                            <tr><td><b>Your Complaint:  
                                 </b>   {m.description}</td></tr>

                            
                            <br />
                            <tr><td><b>Status by Admin:  </b>We have recieved your complaint. We will soon take action on it. Thanks!</td></tr>
                        </table>
                        
                        )}
                </div>
        </div>
    )
}

}
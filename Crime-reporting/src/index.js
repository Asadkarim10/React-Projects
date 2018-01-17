import React from 'react';
import ReactDOM from 'react-dom';
import './config';
import './index.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link, Router, browserHistory, Route, IndexRoute } from 'react-router';
import * as firebase from 'firebase';
import Signin from './components/signin';
import SignUp from './components/signup';
import Main from './components/main';
import Thanks from './components/thanks';
import CrimeForm from './components/crimeform';
import Complaints from './components/complaints';
import ComplaintForm from './components/complaintform';
import MissingReportForm from './components/missingreportform';
import AppBarExampleIcon from './components/appbar';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Person from 'material-ui/svg-icons/social/person';
import * as MUI from 'material-ui'



  class Home extends React.Component {

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

  render() {
    return (
      <div>
        <MuiThemeProvider>
        <div>
<center>
      <div>

        <Link to="/signin"><RaisedButton type="submit" primary={true} style={{margin: 12}} label="Log In" /></Link>
        <Link to="/signup"><RaisedButton type="submit" primary={true} style={{margin: 12}} label="Sign Up" /></Link>
      </div></center>
      
      <br /><br /><br /><br /><br /><br />

                        <h1>Recent Crime Reports </h1>
                        <div class="container">


                        {/*{this.state.crimeReports.map((m, i) =>
                        
                         
                        <table class="table table-striped">
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
                <div class="container">
                        {/*{this.state.missingReports.map((m, i) =>

                        <table class="table table-striped">
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
                                                        {/* <div><b>Date : </b>    {m.date}</div> */}
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

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={AppBarExampleIcon}>
        <IndexRoute component={Home} />
        <Route path="/signin" component={Signin}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/main" component={Main}></Route>
        <Route path="/crimeform" component={CrimeForm}></Route>
        <Route path="/complaintform" component={ComplaintForm}></Route>
        <Route path="/missingreportform" component={MissingReportForm}></Route>
        <Route path="/thanks" component={Thanks}></Route>
        <Route path="/complaints" component={Complaints}></Route>
      </Route>
  </Router>
,
  document.getElementById('root')
);
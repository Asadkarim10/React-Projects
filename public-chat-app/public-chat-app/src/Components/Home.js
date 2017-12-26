import React,{Component} from 'react'
import Login from './login'
import AppBar from 'material-ui/AppBar';

//import  '../CSS/nav.css'
import Nav from './nav'
export default class Home extends Component{
render(){
    return(
            <div>
               <div id="title">
               <AppBar
    title="Real-Time Public Chat-App"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
             <h1 id="name"></h1>
                   </div>
                <Nav {... this.props}/>         
                <Login {... this.props}/>
            </div>
  
  )}
}
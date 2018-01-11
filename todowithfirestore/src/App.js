import React, { Component } from 'react';
import logo from './logo.svg';
import * as firebase from 'firebase';
import "firebase/firestore";
import FlatButton from 'material-ui/FlatButton';
import './App.css';


const ref = firebase.firestore();


class App extends Component {
  constructor(){
    super()
    this.state={
      todo : '',
      allTodos:[]
    }
  }



  // componentDidMount() {
  //   const self = this;
  //   // ref.child("newtodo").on("value", function(wayn) {
  //      ref.on("value", function(snapshot) {


  //       const data = snapshot.val();
  //     if(data){
  //       let allTodos = [];
  //       for(let key in data){
  //         const obj = {
  //           name: data[key].name,
  //           key: key
  //       }
  //         allTodos.push(obj)
  //       }
  //       self.setState({allTodos:allTodos})
  
  //     }
  //   })
  // }





  onChange(event){
    this.setState ({todo: event.target.value})
  }

save(){
  ref.collection("cities").doc();
}

 delete(data, event){
     console.log(data);
  ref.child(data.key).remove();

}


  render() {
    return (
      <div className="App">
                 
        <input type="text" value={this.state.todo} onChange={this.onChange.bind(this)} /> 
        <button onClick={this.save.bind(this)}>Add Todo</button>
      
      <ul>        
           {this.state.allTodos  &&  this.state.allTodos.map((data, index)  => {
            return <li key={index}>{data.name}<span style={{margin:"500px"}}></span>  <FlatButton  primary={true}  onClick={this.delete.bind(this, data)}>X</FlatButton></li>
            })}
          </ul> 
      

      
      </div>
    );
  }
}

export default App;
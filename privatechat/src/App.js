import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SignUp from './SignUp';
import Login from './LogIn';
import Upload from './upload';

import privatechat from './privatechat';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/"  component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/privatechat" component={privatechat} />
          <Route path="/upload" component={Upload} />
      </div>
      </Router>
    );
  }
}

export default App;


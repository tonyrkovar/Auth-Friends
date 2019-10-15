import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './components/Login'
import { Friends } from './components/Friends'
import { PrivateRoute } from './utils/PrivateRoute'
import { AddFriend } from './components/AddFriend';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path='/friends' component={Friends} />
          <PrivateRoute path='/addfriend' component={AddFriend} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

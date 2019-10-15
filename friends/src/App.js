import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from './components/Login'
import { Friends } from './components/Friends'

function App() {
  return (
    <Router>
      <div className="App">
        <Route component={Login} />
        <Route component={Friends} />
      </div>
    </Router>
  );
}

export default App;

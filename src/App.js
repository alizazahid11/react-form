// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Routes>
    </Router>
  );
};

export default App;

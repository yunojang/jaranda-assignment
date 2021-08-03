import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from 'Pages/Admin/Admin';
import Main from 'Pages/Main/Main';
import Login from 'Pages/Login/Login';
import Signup from 'Pages/Signup/Signup';
import Header from './Components/header';

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
      </Switch>
    </Router>
  );
}

export default Routes;

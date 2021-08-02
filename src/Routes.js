import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from 'Pages/Admin/Admin';
import Main from 'Pages/Main/Main';
import Login from 'Pages/Login/Login';
import Signup from 'Pages/Signup/Signup';
import Header from './Components/header';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;

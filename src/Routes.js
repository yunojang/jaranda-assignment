import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ROUTES_PATH } from 'constant/routesPath';
import Admin from 'Pages/Admin';
import Main from 'Pages/Main';
import Signup from 'Pages/Signup';
import Header from './Components/header';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path={ROUTES_PATH.MAIN} component={Main}></Route>
          <Route path={ROUTES_PATH.ADMIN_PAGE} component={Admin}></Route>
          <Route path={ROUTES_PATH.ADMIN} component={Admin}></Route>
          <Route path={ROUTES_PATH.SIGNUP} component={Signup}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;

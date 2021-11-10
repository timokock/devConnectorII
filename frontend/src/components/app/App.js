import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../layout/Navbar';
import Landing from '../layout/Landing';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Register from '../auth/Register';

import '../../assets/css/App.css';

import { Provider } from 'react-redux';
import store from '../../store';

const App = () => 
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={ Landing } />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
export default App;
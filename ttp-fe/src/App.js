import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Profile from './containers/Profile'
import Transactions from './containers/Transactions'
import { removeCurrentUser } from './Redux/actioncreator/useractions';

class App extends Component {
  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.removeCurrentUser();
  }

  render() {
    return (
      <Fragment >
        <Navbar handleLogout={this.handleLogout} />
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/transactions' component={Transactions}/>
        <Route exact path='/' component ={Home} />
      </Fragment >
    );
  }
}

export default withRouter(connect(null,{ removeCurrentUser })(App));

import React, { Component, Fragment } from 'react';
import './App.scss'
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import Sidebar from './containers/Sidebar';
import Home from './containers/Home';
import Profile from './containers/Profile'
import Transactions from './containers/Transactions'
import { removeCurrentUser } from './Redux/actioncreator/useractions';

class App extends Component {
  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.removeCurrentUser();
  }
  // <Navbar handleLogout={this.handleLogout} />

  render() {
    return (
      <Fragment >
        {localStorage.token ? <Sidebar handleLogout={this.handleLogout}/> : null}
        <Route path='/profile' component={Profile}/>
        <Route path='/transactions' component={Transactions}/>
        <Route exact path='/' component ={Home} />
      </Fragment >
    );
  }
}

export default withRouter(connect(null,{ removeCurrentUser })(App));

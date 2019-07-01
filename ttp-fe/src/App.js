import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { fetchUser } from './Redux/actioncreator';

class App extends Component {

  componentDidMount() {
    if(this.props.currentUser === null) {
      if(localStorage.getItem("token")) {
        this.props.fetchUser(localStorage.token);

      }
    }
  }


  render() {
    console.log(this.props.testing,"I'm testing this out.");
    return (
      <Fragment >
        <Navbar />
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route exact path='/' component ={Home} />
      </Fragment >
    )

  }
}

const mapStateToProps = state => {
  return {
    currentUser:state.currentUser,
  };
};

export default withRouter(connect(mapStateToProps,{ fetchUser })(App));

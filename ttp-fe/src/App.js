import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Login from './components/Login'
import Signup from './components/Signup'
import { fetchUser } from './Redux/actioncreator'

class App extends Component {

  componentDidMount() {
    if(this.props.currentUser === null) {
      if(localStorage.getItem("token")) {
        this.props.fetchUser(localStorage.token);
      }
    }
  }


  render() {
    return (
      <Fragment >
        <Login />
        <Signup />
      </Fragment >
    )

  }
}

const mapStateToProps = state => {
  return {
    currentUser:state.currentUser
  }
}

export default connect(mapStateToProps,{ fetchUser })(App);

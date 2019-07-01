import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Login from './components/Login'
import Signup from './components/Signup'

class App extends Component {

  componentDidMount() {
    if(localStorage.getItem("token")) {
      console.log("YAY WE HAVE A TOKEN")
    }
  }


  render() {
    return (
      <Fragment>
        <Login />
        <Signup />
      </Fragment>
    )

  }
}

const mapStateToProps = state => {
  return {
    currentUser:state.currentUser
  }
}

export default connect(mapStateToProps)(App);

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {

  if(!localStorage.token) {
    return (
      <div>
        <Link to="/login"> Login </Link>
        <Link to="/signup"> Signup </Link>
      </div>
    )
  } else {
    return (
      <div>
        <Link to="/" onClick={props.handleLogout}> Logout </Link>
      </div>
    )
  }
}





export default withRouter(Navbar)

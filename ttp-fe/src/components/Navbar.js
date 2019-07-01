import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeCurrentUser } from '../Redux/actioncreator';

// cannot use my action creator functions have to manually connect redux . I need to find a better way since this is a functional component.




const Navbar = (props) => {

  const handleLogout = () => {
    localStorage.removeItem("token")
    debugger
    this.props.removeCurrentUser()
  }

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
        <Link to="/" onClick={handleLogout}> Logout </Link>
      </div>
    )
  }
}





export default withRouter(connect(null,{ removeCurrentUser })(Navbar))

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import '../stylesheets/Sidebar.scss'

class Sidebar extends Component {
  render(){
    return (
      <div className="sidebar">
        {this.props.currentUser ?
          <h2 className="user">{this.props.currentUser.name}</h2>
          : null}
        <ul>
          <li><Link to={'/profile'}> Profile </Link></li>
          <li><Link to={'/transactions'}>Transactions</Link></li>
        </ul>
        <Link
          to={'/'}
          onClick={this.props.handleLogout}
          className="logout"
        >
          Logout
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps)(Sidebar));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSignup } from '../Redux/actioncreator/useractions';
import { withRouter } from 'react-router-dom';

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSignup(this.state)
    .then(() => this.props.history.push('/profile'))
    .catch(() => this.props.history.push('/'))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="signup">
        <label>Name</label>
        <input
          placeholder="Your Name"
          name="name"
          onChange={this.handleChange}
        />
        <label>Email</label>
        <input
          placeholder="Email"
          name="email"
          onChange={this.handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default withRouter(connect(null, { handleSignup })(Signup));

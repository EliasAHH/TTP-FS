import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../Redux/actioncreator/useractions';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleLogin(this.state)
      .then(() => this.props.history.push('/profile'))
      .catch(() => this.props.history.push('/'))
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit} className="login">
        <label> Email </label>
        <input
          placeholder="Email"
          name="email"
          onChange={this.handleChange}
        />
        <label> Password </label>
        <input
          type= "password"
          placeholder="Password"
          name="password"
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default withRouter(connect(null, { handleLogin })(Login));

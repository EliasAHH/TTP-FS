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
      .catch(() => this.props.history.push('/login'))
  }

  render() {
    console.log(this.state);
    return(
      <form onSubmit={this.handleSubmit}>
        <h1> Login </h1>
        <label> Email
          <input placeholder="Email" name="email" onChange={this.handleChange}/>
         </label>
        <label> Password
          <input type= "password" placeholder="Password" name="password" onChange={this.handleChange}/>
        </label>
        <button type="submit">Submit </button>
      </form>
    )
  }

}
export default withRouter(connect(null,{ handleLogin })(Login));

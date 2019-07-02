import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../Redux/actioncreator'

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
export default connect(null,{ handleLogin })(Login);

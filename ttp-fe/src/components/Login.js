import React, { Component } from 'react';


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
  }

  render() {
    console.log(this.state);
    return(
      <form onSubmit={this.handleSubmit}>
        <label> Email
          <input placeholder="Email" name="email" onChange={this.handleChange}/>
         </label>
        <label> Password
          <input placeholder="Password" name="password" onChange={this.handleChange}/>
        </label>
        <button type="submit">Submit </button>
      </form>
    )
  }

}
export default Login

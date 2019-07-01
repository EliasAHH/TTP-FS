import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSignup } from '../Redux/actioncreator'


class Signup extends Component {

  state = {
    name: "",
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
    this.props.handleSignup(this.state);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h1> Signup </h1>
        <label> Name
          <input placeholder="Your Name" name="name" onChange={this.handleChange}/>
        </label>
        <label> Email
          <input placeholder="Email" name="email" onChange={this.handleChange}/>
         </label>
        <label> Password
          <input placeholder="Password" name="password" onChange={this.handleChange}/>
        </label>
        <button type="submit"> Submit </button>
      </form>
    )
  }

}
export default connect(null,{ handleSignup })(Signup)

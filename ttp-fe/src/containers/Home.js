import React, { Component } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import '../stylesheets/Home.scss';

class Home extends Component {
  state = {
    view: "login"
  }

  whichForm = (e) => {
    if(e.target.innerText.toLowerCase() !== this.state.view) {
      this.setState({
        view: e.target.innerText.toLowerCase()
      })
    }
  }

  renderView = () => {
    if(this.state.view === "login") {
      return <Login />
    } else {
      return <Signup />
    }
  }

  render() {
    return (
      <div className="home">
        <div className="credentials">
          <div className="toggle">
            <button
              onClick={this.whichForm}
              className={this.state.view === 'login' ? 'active' : ''}
            >
              Login
            </button>
            <button
              onClick={this.whichForm}
              className={this.state.view === 'signup' ? 'active' : ''}
            >
              Signup
            </button>
          </div>
          {this.renderView()}
        </div>
      </div>
    );
  }
}
export default Home;

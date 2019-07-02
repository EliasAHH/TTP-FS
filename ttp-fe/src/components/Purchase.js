import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyStock } from '../Redux/actioncreator';


class Purchase extends Component {
  state = {
    ticker: "",
    shares: 0
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.buyStock(this.state);

  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Ticker
          <input placeholder="Ticker" name="ticker" onChange={this.handleChange}/>
        </label>
        <label> Shares
          <input placeholder="Shares" name="shares" onChange={this.handleChange}/>
        </label>
        <button type="submit"> Buy </button>
      </form>
    );
  }
}

export default connect(null,{ buyStock })(Purchase);

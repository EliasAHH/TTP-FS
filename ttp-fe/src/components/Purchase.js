import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyStock,saveStock } from '../Redux/actioncreator/stockactions';


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
    // Need to add someway of making sure the ticker symbol the user has entered is valid or not.
    this.props.buyStock(this.state.ticker)
      .then(() => this.props.saveStock(this.state.shares,this.props.boughtStock,this.props.currentUser))

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

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    boughtStock: state.boughtStock
  }
}

export default connect(mapStateToProps,{ buyStock,saveStock })(Purchase);

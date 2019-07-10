import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyStock } from '../Redux/actioncreator/stockactions';
import { withRouter } from 'react-router-dom';


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
    // shares comes in a string so I have to turn it into a int before checking to see if it's a whole # or not.
    if(Number.isInteger(parseInt(this.state.shares))) {
      this.props.buyStock(this.state, this.props.currentUser,this.props.ownedStocks)
    }else {
      alert("You must enter a whole number in the shares field")
    }
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
    ownedStocks: state.ownedStocks
  }
}

export default withRouter(connect(mapStateToProps,{ buyStock })(Purchase));

import React, { Component } from 'react';
import Stocks from '../components/Stocks';
// import { connect } from 'react-redux';
// import { getOwnedStocks } from '../Redux/actioncreator/stockactions'


class StocksContainer extends Component {

  render() {
    console.log(this.props.ownedStocks,this.props.user);
    return (
      <div>
        <Stocks />
      </div>
    );
  }
}

export default StocksContainer;

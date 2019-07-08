import React, { Component } from 'react';
import Stocks from '../components/Stocks';
// import { connect } from 'react-redux';
// import { getOwnedStocks } from '../Redux/actioncreator/stockactions'


const StocksContainer = props => {
  const { user, ownedStocks } = props

  if(user !== null) {
    return ownedStocks.map(stock => <Stocks key={stock.id} stock={stock} />)
  }
  return (
      <div>
        Loading...
      </div>
    );
}


export default StocksContainer;

import React, { Component } from 'react';
import Stocks from '../components/Stocks';


class StocksContainer extends Component {
  // Need to map through  all my owned stocks and simply send it to the child component. 
  render() {
    return (
      <div>
        <Stocks />
      </div>
    );
  }
}

export default StocksContainer;

import React from 'react';


const Stocks = props => {
  const { latestPrice, open, shares, symbol } = props.stock

  const checkOpen = () => {
    if(latestPrice > open){
      return <span> green </span>
    }else if(latestPrice === open) {
      return <span> grey </span>
    }else {
      return <span> red </span>
    }
  }

    return (
      <div>
      {symbol} {shares} {latestPrice * shares} {checkOpen()}
      </div>
    );
}

export default Stocks;

import React from 'react';

const Stock = props => {
  const { latestPrice, open, shares, symbol } = props.stock

  const checkOpen = () => {
    if(latestPrice > open) {
      return 'text-green'
    } else if(latestPrice === open) {
      return 'text-gray'
    } else {
      return 'text-red'
    }
  }

  return (
    <div className="stock">
      <p id="symbol" className={checkOpen()}>{symbol}</p>
      <p id="shares">{shares}</p>
      <p id="price" className={checkOpen()}>${(latestPrice * shares).toFixed(2)}</p>
    </div>
  );
}

export default Stock;

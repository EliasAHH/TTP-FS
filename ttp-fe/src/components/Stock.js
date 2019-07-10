import React from 'react';

const Stock = props => {
  const { latestPrice, open, shares, symbol } = props.stock

  const checkOpen = () => {
      if(latestPrice > open) {
        return <span>green</span>
      } else if(latestPrice === open) {
        return <span>grey</span>
      } else {
        return <span>red</span>
    }
  }

  return (
    <div>
      {symbol} {shares} {(latestPrice * shares).toFixed(2)} {checkOpen()}
    </div>
  );
}

export default Stock;

import React from 'react';


const Stocks = props => {
  const { bought_price, ticker, shares } = props.stock;

    return (
      <div>
        {bought_price} {shares} {ticker}
      </div>
    );
}

export default Stocks;

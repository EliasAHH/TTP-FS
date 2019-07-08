import React from 'react';


const Stocks = props => {
  console.log(props, "this is inside the stocks container")
  const { bought_price, ticker, shares } = props.stock;

  console.log(bought_price)

    return (
      <div>
        {bought_price} {shares} {ticker}
      </div>
    );
}

export default Stocks;

import React from 'react'

const Order = props => {
  const { price, ticker, shares } = props.order
  return(
    <div className="order">
      <p className="bought"> Buy </p>
      <p className="ticker"> {ticker.toUpperCase()} </p>
      <p className="together"> {shares} @ ${price} </p>
    </div>
  );
}

export default Order;

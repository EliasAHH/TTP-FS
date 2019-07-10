import React from 'react';

const SumOfStocks = props => {
  if(props.price) {
    return (
      <p className="stocks-sum">
        Value of Stocks : ${props.price.toFixed(2)}
      </p>
    );
  }
}

export default SumOfStocks;

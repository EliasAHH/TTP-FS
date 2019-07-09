import React from 'react';


const SumOfStocks = props =>  {
  if(props.price)
    return (
      <div>
        Value of Stocks : ${props.price.toFixed(2)}
      </div>
    )
  }

export default SumOfStocks;

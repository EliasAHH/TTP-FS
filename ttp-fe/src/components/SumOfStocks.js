import React from 'react';


const SumOfStocks = props =>  {
  if(props.price)
    return (
      <div>
        Value of Stocks : ${props.price}
      </div>
    )
  }

export default SumOfStocks;

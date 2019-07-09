import React from 'react';
import Stocks from '../components/Stocks';
import SumOfStocks from '../components/SumOfStocks';


const StocksContainer = props => {
  const { user, stocksInfo } = props;

  const sendStock = () => {
    if(stocksInfo !== null) {
      return Object.keys(stocksInfo).map(stock => <Stocks key={stock} stock={stocksInfo[stock].quote} />)
      } else {
      return (
        <div>
          loading ...
        </div>
      );
    }
  }


const getStockValue = () => {
  if(user && stocksInfo) {
    const price = Object.keys(stocksInfo).reduce((acc,stock) => {
      return (stocksInfo[stock].quote.latestPrice * stocksInfo[stock].quote.shares) + acc;
    },0)
    return (
        <SumOfStocks price={price} />
    );
  }
}

  return (
    <div>
    {getStockValue()}
      {sendStock()}
    </div>
  )
}


export default StocksContainer;

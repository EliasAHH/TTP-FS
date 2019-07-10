import React from 'react';
import Stock from '../components/Stock';
import SumOfStocks from '../components/SumOfStocks';

const StocksContainer = props => {
  const { user, stocksInfo } = props;

  const sendStock = () => {
    if(stocksInfo !== null) {
      return Object.keys(stocksInfo)
        .map(ticker => <Stock key={ticker} stock={stocksInfo[ticker].quote} />)
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
      const price = Object.keys(stocksInfo)
        .reduce((acc,ticker) => {
          return (stocksInfo[ticker].quote.latestPrice * stocksInfo[ticker].quote.shares) + acc;
      }, 0)
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
  );
}

export default StocksContainer;

import React from 'react';
import Stock from '../components/Stock';
import SumOfStocks from '../components/SumOfStocks';

const StocksContainer = props => {
  const { user, stocksInfo } = props;

  const sendStock = () => {
    if(stocksInfo && user) {
      if(user.id === stocksInfo[Object.keys(stocksInfo)[0]].quote.user_id) {
        return Object.keys(stocksInfo)
        .map(ticker => <Stock key={ticker} stock={stocksInfo[ticker].quote} />)
      } else {
        return (
          <div className="message">
          </div>
        )
      }
    }
  }

  const getStockValue = () => {
    if(user && stocksInfo) {
      if(user.id === stocksInfo[Object.keys(stocksInfo)[0]].quote.user_id) {
        const price = Object.keys(stocksInfo)
        .reduce((acc,ticker) => {
          return (stocksInfo[ticker].quote.latestPrice * stocksInfo[ticker].quote.shares) + acc;
        }, 0)
        return (
          <SumOfStocks price={price} />
          );
        }
      }
    }

  return (
    <div className="stocks-container">
      {getStockValue()}
      <div className="stocks">
        {sendStock()}
      </div>
    </div>
  );
}

export default StocksContainer;

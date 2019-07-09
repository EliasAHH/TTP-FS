import React from 'react';
import Stocks from '../components/Stocks';
// import SumOfStocks from '../components/SumOfStocks';


const StocksContainer = props => {
  const { user, stocksInfo } = props;

  const sendStock = () => {
    if(stocksInfo !== null) {
      for(let stock in stocksInfo){
        return <Stocks key={stock} stock={stocksInfo[stock].quote} />
        }
    } else {
      return (
        <div>
          loading ...
        </div>
      );
    }
  }


// const getStockValue = () => {
//   if(user !== null && ownedStocks.length > 0) {
//     const price = ownedStocks.reduce((acc,stock) => {
//       return (stock.bought_price * stock.shares) + acc;
//     },0)
//     return (
//         <SumOfStocks price={price} />
//     );
//   }
// }
// {getStockValue()}

  return (
    <div>
      {sendStock()}
    </div>
  )
}


export default StocksContainer;

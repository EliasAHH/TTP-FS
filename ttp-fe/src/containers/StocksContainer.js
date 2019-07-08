import React from 'react';
import Stocks from '../components/Stocks';
import SumOfStocks from '../components/SumOfStocks';
// import { connect } from 'react-redux';
// import { getOwnedStocks } from '../Redux/actioncreator/stockactions'


const StocksContainer = props => {
  const { user, ownedStocks } = props

  const sendStock = () => {
    if(user !== null) {
      return ownedStocks.map(stock => <Stocks key={stock.id} stock={stock} />)
    } else {
      return (
        <div>
        loading...
        </div>
      )
  }
}

const getStockValue = () => {
  if(user !== null && ownedStocks.length > 0) {
    const price = ownedStocks.reduce((acc,stock) => {
      return (stock.bought_price * stock.shares) + acc;
    },0)
    return (
        <SumOfStocks price={price} />
    )
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

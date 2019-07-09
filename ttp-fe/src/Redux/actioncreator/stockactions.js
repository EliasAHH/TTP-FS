const token = "Tpk_1ab330dccd114a60a3b61923aac87d00";

const saveStock = (shares,stockInfo,user) => {
  console.log(stockInfo,'this is the stock info');

  const newStock = {
    shares: shares,
    ticker: stockInfo.symbol,
    current_price: stockInfo.latestPrice,
    user_id: user.id
  };

  fetch("http://localhost:3000/stocks", {
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify(newStock)
  })
}

const updateStock = (shares, stockInfo, user) => {
  const updatedInfo = {
    shares: shares,
    ticker: stockInfo.symbol,
    current_price: stockInfo.latestPrice
  };
  fetch(`http://localhost:3000/owned_stocks/${user.id}`, {
    method:"PATCH",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify(updatedInfo)
  })

}

const newOrUpdate = (ownedStocks,purchasedStock,user,stockInfo) => {
  // in my db the ticker will always be capitalized so I have to check the ticker in the db to the the capitalized version of the ticker the user wrote in.
    const alreadyOwned = ownedStocks.filter(stock => stock.ticker === purchasedStock.ticker.toUpperCase())
    if(alreadyOwned.length > 0) {
      updateStock(purchasedStock.shares,stockInfo ,user)
    }else {
      saveStock(purchasedStock.shares,stockInfo,user)
    }
}

export const buyStock = (purchasedStock,user,ownedStocks) => {
  return dispatch => {
    fetch(`https://sandbox.iexapis.com/stable/stock/${purchasedStock.ticker}/quote?token=${token}`)
    .then(response => response.json())
    .then(response => newOrUpdate(ownedStocks,purchasedStock,user,response))
    .catch(() => alert("This Ticker symbol does not exist. Please type in a correct Ticker symbol"))
  }
}


export const getOwnedStocks = user => {
  return dispatch => {
    return fetch(`http://localhost:3000/users/${user.id}`)
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: "OWNED_STOCKS",
        payload: response
      })
    })
  }
}

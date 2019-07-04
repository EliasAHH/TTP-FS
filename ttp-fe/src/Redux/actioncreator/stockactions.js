const token = "Tpk_1ab330dccd114a60a3b61923aac87d00";

export const buyStock = (purchasedStock,user) => {
  // the function works but won't translate to saveStock properly. need to work on this.
  return dispatch => {
    fetch(`https://sandbox.iexapis.com/stable/stock/${purchasedStock.ticker}/quote?token=${token}`)
    .then(response => response.json())
    .then(response => saveStock(purchasedStock.shares,response,user))
  }
}
// Since i'm not going to be saving the response in my reducer it's easier and cleaner
// to just keep all the work under one function call.

const saveStock = (shares,stockInfo,user) => {
  // Need to figure out a better way to connnect these two.
    console.log("I hit saveStock");

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
    .then(response => response.json())
    .then(response => console.log(response))
}



export const getOwnedStocks = user => {
  return dispatch => {
    fetch(`http://localhost:3000/users/${user.id}`)
    .then(response => response.json())
    .then(response => console.log(response))
  }
}

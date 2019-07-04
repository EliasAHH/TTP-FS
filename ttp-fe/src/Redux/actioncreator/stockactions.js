const token = "Tpk_1ab330dccd114a60a3b61923aac87d00";


export const buyStock = ticker => {
  // the function works but won't translate to saveStock properly. need to work on this.
  return dispatch => {
    console.log("I hit buyStock");
    return fetch(`https://sandbox.iexapis.com/stable/stock/${ticker}/quote?token=${token}`)
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: "BUY_STOCKS",
        payload: response
      })
    })
  }
}

export const saveStock = (shares,stockInfo,user) => {
  // Need to figure out a better way to connnect these two.
  return dispatch => {
    console.log("I hit saveStock");
    debugger

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
    .then(response => console.log)
  }
}

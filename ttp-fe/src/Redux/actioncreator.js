const token = "Tpk_1ab330dccd114a60a3b61923aac87d00";

export const handleSignup = newUser => {
  return dispatch => {
    fetch("http://localhost:3000/users", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(response => {
      dispatch({
        type:"LOG_IN_SIGN_UP",
        payload:response
      })
    })
  }
}

export const handleLogin = user => {
  return dispatch => {
    fetch("http://localhost:3000/auth", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(user)
    })
    .then(response => response.json())
    .then(response => {
      dispatch({
        type:"LOG_IN_SIGN_UP",
        payload:response
      })
    })
  }
}

export const fetchUser = token => {
  return dispatch => {
    fetch("http://localhost:3000/current_user", {
      method:"GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization":token
      }
    })
    .then(response => response.json())
    .then(response => {
      dispatch({
        type:"GET_USER",
        payload:response
      })
    })
  }
}


export const removeCurrentUser = () =>{
  return dispatch => {
    dispatch({
      type:"REMOVE_USER"
    })
  }
}

export const buyStock = (stock,user)=> {
  // the function works but won't translate to saveStock properly. need to work on this.
  return dispatch => {
    console.log("I hit buyStock");
    fetch(`https://sandbox.iexapis.com/stable/stock/${stock.ticker}/quote?token=${token}`)
    .then(response => response.json())
    .then(response => saveStock(stock.shares,response,user))
  }
}

const saveStock = (shares,stockInfo,user) => {
  // Need to figure out a better way to connnect these two.
  return dispatch => {
    console.log("I hit saveStock");

    const newStock = {
      shares: shares,
      ticker: stockInfo.symbol,
      current_price: stockInfo.latestPrice,
      user_id: user.user_id
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

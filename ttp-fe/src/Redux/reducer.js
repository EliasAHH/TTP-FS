const initialState = {
  currentUser: null,
  ownedStocks: [],
  stocksUpdatedInfo:null,
  transactions:null
}


const reducer = (state = initialState,action) => {
  switch(action.type) {

    case "LOG_IN_SIGN_UP":
      localStorage.setItem("token", action.payload.jwt);
      return state;

    case "GET_USER":
      console.log(action.payload)
      return {...state, currentUser:action.payload};

    case "REMOVE_USER":
      localStorage.removeItem("token");
      return {...state, currentUser:null,ownedStocks:null};

    case "OWNED_STOCKS":
      return {...state, ownedStocks:action.payload};

    case "STOCKS_CURRENT_VALUE":
      console.log(action.payload)
      return {...state, stocksUpdatedInfo:action.payload}

    case "HISTORY":
    return {...state,transactions:action.payload}

    default:
    return state;
  }

}

export default reducer

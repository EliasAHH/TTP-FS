const initialState = {
  currentUser:{}
}


const reducer = (state = initialState,action) => {
  switch(action.type) {

    case "LOG_IN_SIGN_UP":
      localStorage.setItem("token", action.payload.jwt);
      return state;

    case "GET_USER":
      return {...state, currentUser:action.payload};


    default:
    return state;
  }

}

export default reducer

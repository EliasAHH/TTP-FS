const initialState = {
  currentUser: null
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
      return {...state, currentUser:null}

    default:
    return state;
  }

}

export default reducer

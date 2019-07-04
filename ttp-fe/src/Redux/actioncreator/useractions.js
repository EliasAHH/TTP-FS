
export const handleSignup = newUser => {
  return dispatch => {
    return fetch("http://localhost:3000/users", {
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
    return fetch("http://localhost:3000/auth", {
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

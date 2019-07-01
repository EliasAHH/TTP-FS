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
      dispatch({type:"LOG_IN_SIGN_UP",payload:response})
    })

  }
}

export const handleLogin = existingUser => {
  return dispatch => {
    fetch("http://localhost:3000/auth", {
      method:"POST",
      header: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(existingUser)
    })
    .then(response => response.json())
    .then(response => {
      dispatch({type:"LOG_IN_SIGN_UP", payload:response})
    })
  }
}

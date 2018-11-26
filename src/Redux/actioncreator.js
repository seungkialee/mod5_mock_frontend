export const login = (username, password) => {
  return dispatch => {
    fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        Authorization: `Bearer <token>`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: username,
        password: password
      })
    })
      .then(resp => resp.json())
      .then(user =>
        dispatch({
          type: "LOG_IN",
          payload: user
        })
      );
  };
};

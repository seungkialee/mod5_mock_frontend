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
//create new user
// fetch('http://localhost:3001/api/v1/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json'
//   },
//   body: JSON.stringify({
//     user: {
//       username: 'test3',
//       password: "1",
//     }
//   })
// })
//   .then(r => r.json())
//   .then(console.log)

export const fetchUser = token => {
  return dispatch => {
    fetch("http://localhost:3001/api/v1/current_user/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(user => {
        dispatch({
          type: "GET_USER",
          payload: user
        });
      });
  };
};

export const logOut = () => {
  return dispatch => {
    dispatch({
      type: "LOG_OUT_USER"
    });
  };
};

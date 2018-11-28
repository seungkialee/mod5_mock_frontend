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
//
// export const fetchAccounts = user_id => {
//   return dispatch => {
//     fetch(`http://localhost:3001/api/v1/accounts/${user_id}`, {
//       method: "GET",
//       headers: {"Content-Type": "application/json"}
//     })
//       .then(resp => resp.json())
//       .then(accounts => {
//         dispatch({
//           type: "FETCH_ACCOUNTS",
//           payload: accounts
//         });
//       });
//   };
// };

//code to create bank_account
// export const createAccount = (
//   type: string,
//   balance: string,
//   userId: string
// ) => {
//   return dispatch => {
//     fetch("http://localhost:3001/api/v1/accounts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: JSON.stringify({
//         account_type: type,
//         balance: balance,
//         user_id: userId
//       })
//     })
//       .then(resp => resp.json())
//       .then(account => {
//         dispatch({
//           type: "CREATE_ACCOUNT",
//           payload: account
//         });
//       });
//   };
// };

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

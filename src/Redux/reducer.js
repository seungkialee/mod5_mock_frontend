const initialState = {
  currentUser: {},
  // receiveAcc: {}
  // authCurrentUser: null
  // loggedIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      localStorage.setItem("token", action.payload.jwt);
      return {
        ...state,
        currentUser: action.payload
      };

    case "GET_USER":
      return {
        ...state,
        currentUser: action.payload
      };

    case "LOG_OUT_USER":
      localStorage.removeItem("token");
      return {
        ...state,
        currentUser: {}
      };

      // case "GET_RECEIVER_ACC":
      //   return {
      //     ...state,
      //     receiveAcc: action.payload
      //   };

    default:
      return state;
  }
};
// console.log("initialState", initialState);

export default reducer;

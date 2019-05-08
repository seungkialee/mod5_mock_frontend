const initialState = {
  currentLogin: {},
  currentUser: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      localStorage.setItem("token", action.payload.jwt);
      // console.log("payload", action.payload.user);
      return {
        ...state,
        currentLogin: action.payload,
        currentUser: action.payload.user
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

    default:
      return state;
  }
};

export default reducer;

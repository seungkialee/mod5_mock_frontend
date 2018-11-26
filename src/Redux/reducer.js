const initialState = {
  currentUser: null
  // authCurrentUser: null
  // loggedIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      console.log("payload", action.payload);
      localStorage.setItem("token", action.payload.jwt);
      return {...state, currentUser: action.payload};

    case "GET_USER":
      return {
        ...state,
        currentUser: action.payload
      };

    case "LOG_OUT_USER":
      localStorage.removeItem("token");
      return {...state, currentUser: null};

    default:
      return state;
  }
};
// console.log("initialState", initialState);

export default reducer;

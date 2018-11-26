const initialState = {
  currentUser: null,
  loggedIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      console.log("payload", action.payload);
      localStorage.setItem("token", action.payload.jwt);
      return {...state, currentUser: action.payload};
    default:
      return state;
  }
};

export default reducer;

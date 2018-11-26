import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import thunk from 'redux-thunk'
// import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducer from './Redux/reducer'

const store = createStore(reducer, applyMiddleware(thunk))
console.log(store.getState)
ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregi ster();
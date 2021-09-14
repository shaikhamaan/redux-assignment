import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";

// STORE -> GLOBALIZED STATE
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ACTION -> DESCRIBES WHAT YOU WANNA DO -> IN OUR CASE INCREMENT

// REDUCER -> HOW ACTION GOING TO TRANSFORM STATE INTO A NEXT STATE

// DISPATCH -> THIS WILL DISPATCH OUR ACTION. EXECUTES ACTION

// DISPATCH -> ACTION -> REDUCER -> STORE

// WHEN ACTION GETS CALLED THE REDUCER WILL CHECK WHICH ACTION IS CALLED AND WILL CHANGE THE STORE ACCORDINGLY

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

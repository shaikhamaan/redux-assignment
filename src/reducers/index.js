import counter from "./counter";
import login from "./login";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counter,
  login: login,
});

export default allReducers;

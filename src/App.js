import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, loggedIn } from "./actions";
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);
  const loginStatus = useSelector((state) => state.login);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="counter">
        <button onClick={() => dispatch(increment())}>+</button>
        <h1>Counter value = {counter}</h1>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <hr />
      <div className="loginStatus">
        {loginStatus ? <h3>This is logged in</h3> : <h3>This is logged out</h3>}
        <button className="login" onClick={() => dispatch(loggedIn())}>
          {loginStatus ? <h3>Logout</h3> : <h3>Login</h3>}
        </button>
      </div>
    </div>
  );
}

export default App;

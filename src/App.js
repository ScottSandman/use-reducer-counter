import React, { useReducer, useState } from "react";
import "./App.css";
import {
  incrementCounter,
  decrementCounter,
  updateN,
  incrementByN,
  decrementByN,
  allowIncrementByN,
} from "./actions";
import { reducer } from "./reducers";

const initialState = {
  counter: 0,
  n: 0,
  allowed: true,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="App">
      <header className="App-header">
        <div>{state.counter}</div>
        <button onClick={() => dispatch(incrementCounter())}>increment</button>
        <button onClick={() => dispatch(decrementCounter())}>decrement</button>
        <div>
          <input
            onChange={(e) => {
              dispatch(updateN(Number(e.target.value)));
            }}
          />
          <br />
          <button
            onClick={() => dispatch(incrementByN())}
            disabled={!state.allowed}
          >
            increment by n
          </button>
          <button
            onClick={() => dispatch(decrementByN())}
            disabled={!state.allowed}
          >
            decrement by n
          </button>
          <br />
          <input
            type="checkbox"
            onChange={() => dispatch(allowIncrementByN())}
          />
        </div>
      </header>
    </div>
  );
}

export default App;

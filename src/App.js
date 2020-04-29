import React, { useReducer, useState } from "react";
import "./App.css";

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT_COUNTER":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.counter);
  return (
    <div className="App">
      <header className="App-header">
        <div>{state.counter}</div>
        <button onClick={() => dispatch({ type: "INCREMENT_COUNTER" })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT_COUNTER" })}>
          decrement
        </button>
      </header>
    </div>
  );
}

export default App;

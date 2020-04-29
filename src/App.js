import React from "react";
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
import { CreateStore } from "./store";

function App() {
  const store = CreateStore(reducer);
  return (
    <div className="App">
      <header className="App-header">
        <div>{store.getState().counter}</div>
        <button onClick={() => store.dispatch(incrementCounter())}>
          increment
        </button>
        <button onClick={() => store.dispatch(decrementCounter())}>
          decrement
        </button>
        <div>
          <input
            onChange={(e) => {
              store.dispatch(updateN(Number(e.target.value)));
            }}
          />
          <br />
          <button
            onClick={() => store.dispatch(incrementByN())}
            disabled={!store.getState().allowed}
          >
            increment by n
          </button>
          <button
            onClick={() => store.dispatch(decrementByN())}
            disabled={!store.getState().allowed}
          >
            decrement by n
          </button>
          <br />
          <input
            type="checkbox"
            onChange={() => store.dispatch(allowIncrementByN())}
          />
        </div>
      </header>
    </div>
  );
}

export default App;

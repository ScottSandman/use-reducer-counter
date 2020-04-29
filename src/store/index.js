import { useReducer } from "react";

const initialState = {
  counter: 0,
  n: 0,
  allowed: true,
};

export function CreateStore(reducerFn) {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  console.log(state);
  function getState() {
    return state;
  }
  return { getState, dispatch };
}

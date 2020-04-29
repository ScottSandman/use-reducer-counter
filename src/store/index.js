import { useReducer } from "react";

export function CreateStore(reducerFn) {
  const [state, dispatch] = useReducer(reducerFn, reducerFn(undefined, ""));
  console.log(state);
  function getState() {
    return state;
  }
  return { getState, dispatch };
}

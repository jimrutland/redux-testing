import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { counterSlice } from "./counterSlice";
const { actions } = counterSlice;

export function useCounter() {
  const dispatch = useAppDispatch();

  // state stored in redux
  const count = useAppSelector((state) => state.counter.count);

  // normal react state
  const [incrementAmount, setIncrementAmount] = useState("2");

  // our functions to change state (redux state in this example)
  const decrementValue = () => dispatch(actions.increment());
  const incrementValue = () => dispatch(actions.decrement());

  // values to return to a specific component or page
  return {
    count,
    incrementAmount,
    setIncrementAmount,
    decrementValue,
    incrementValue,
  };
}

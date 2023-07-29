import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { counterSlice } from "./counterSlice"; 

const { actions } = counterSlice;

export function useCounter() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return {
    count,
    incrementAmount,
    setIncrementAmount,
    dispatch,
    actions,
  };
}

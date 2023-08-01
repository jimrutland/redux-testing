// useCounter.test.ts
import { Provider } from "react-redux";
import { useCounter } from "./features/counter/CounterHook";
import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

const renderCounterHook = () => {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
  return renderHook(() => useCounter(), {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
  });
};

describe("useCounter hook", () => {
  test("should handle incrementing value correctly", async () => {
    const { result } = renderCounterHook();
    act(() => result.current.incrementValue());
    await waitFor(() => expect(result.current.count).toBe(1));
  });

  test("should handle decrementing value correctly", async () => {
    const { result } = renderCounterHook();
    act(() => result.current.decrementValue());
    await waitFor(() => expect(result.current.count).toBe(-1));
  });
});

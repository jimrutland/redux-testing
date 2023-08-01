import styles from "./Counter.module.css";
import { useCounter } from "./CounterHook";

export function Counter() {
  const {
    setIncrementAmount,
    incrementAmount,
    decrementValue,
    incrementValue,
    count,
  } = useCounter();
  const { decrement, increment } = actions;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => decrementValue()}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => incrementValue()}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </div>
    </div>
  );
}

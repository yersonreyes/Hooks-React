import { useCounter } from "../hooks/useCounter";

export const CounterApp2 = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Counter: {counter}</h1>
      <hr />
      <button onClick={increment} className="btn btn-primary m-2">
        +1
      </button>
      <button onClick={reset} className="btn btn-primary m-2">
        Reset
      </button>
      <button onClick={decrement} className="btn btn-primary m-2">
        -1
      </button>
    </>
  );
};

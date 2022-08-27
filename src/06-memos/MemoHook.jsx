import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi vamos....");
  }

  return `${iterationNumber} interaciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter();
  const [show, setShow] = useState(true);

  const togleShow = () => {
    setShow(!show);
  };

  const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4> {memorizeValue}</h4>
      <button onClick={increment} className="btn btn-primary">
        +1
      </button>

      <button onClick={togleShow} className="btn btn-primary">
        toggle {JSON.stringify(show)}
      </button>
    </>
  );
};

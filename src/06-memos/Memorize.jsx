import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter();
  const [show, setShow] = useState(true);

  const togleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />

      <button onClick={increment} className="btn btn-primary">
        +1
      </button>

      <button onClick={togleShow} className="btn btn-primary">
        toggle {JSON.stringify(show)}
      </button>
    </>
  );
};

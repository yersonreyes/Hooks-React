import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "./Loading";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  return (
    <>
      <h1>Breaking Bad Api </h1>
      <hr />
      {isLoading ? (
        <Loading />
      ) : (
        <Quote quote={data[0].quote} author={data[0].author} />
      )}

      <button
        disabled={isLoading}
        onClick={increment}
        className="btn btn-primary"
      >
        Next
      </button>
    </>
  );
};

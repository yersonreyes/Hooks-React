import { useLayoutEffect, useRef, useState } from "react";

export const QuoteLayout = ({ quote, author }) => {
  const [boxSize, setBoxSize] = useState({ whidth: 0, heigth: 0 });
  const pRef = useRef();
  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect());
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end " style={{ display: "flex" }}>
        <p ref={pRef}>{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

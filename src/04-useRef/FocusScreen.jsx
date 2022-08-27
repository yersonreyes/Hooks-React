import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  const onFocus = () => {
    inputRef.current.select();
  };
  return (
    <>
      <h1>FocusScreen</h1>
      <input ref={inputRef} className="form-control" type="text" />
      <button onClick={onFocus} className="btn btn-primary mt-2">
        Focus
      </button>
    </>
  );
};

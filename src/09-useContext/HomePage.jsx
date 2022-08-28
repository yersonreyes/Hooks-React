import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { state } = useContext(UserContext);
  return (
    <>
      <h1>HomePage</h1>
      <hr />
      <pre>{JSON.stringify(state, null, 3)}</pre>
    </>
  );
};

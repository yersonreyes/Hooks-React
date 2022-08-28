import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { state, setState } = useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre>{JSON.stringify(state, null, 3)}</pre>

      <button
        onClick={() =>
          setState({
            id: 1,
            user: "yerson",
          })
        }
        className="btn btn-primary"
      >
        establecer datos
      </button>
    </>
  );
};

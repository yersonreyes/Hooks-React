import { useForm } from "../hooks/useForm";

export const Form = () => {
  const { onInputChange, username, email, password, onReset } = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onReset} className="btn btn-primary">
        Reset
      </button>
    </>
  );
};

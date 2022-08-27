import React from "react";
import ReactDOM from "react-dom/client";
//import { CounterApp } from "./01-useState/CounterApp";
//import { CounterApp2 } from "./01-useState/CounterApp2";
import { SimpleForm } from "./02-useEffect/SimpleForm";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>
);

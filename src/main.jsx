import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MainApp } from "./09-useContext/MainApp";
//import { TodoApp } from "./08-useReducer/TodoApp";
//import { MemoHook } from "./06-memos/MemoHook";
//import { Memorize } from "./06-memos/Memorize";
// import { Layout } from "./05-useLayautEffect/Layout";
//import { FocusScreen } from "./04-useRef/FocusScreen";
//import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
//import { Form } from "./02-useEffect/Form";
//import { CounterApp } from "./01-useState/CounterApp";
//import { CounterApp2 } from "./01-useState/CounterApp2";
//import { SimpleForm } from "./02-useEffect/SimpleForm";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>
);

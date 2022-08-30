import React from "react";
// import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import { createRoot } from "react-dom/client";
import "./index.css";

// ReactDOM.render(<TodoList />, document.getElementById("root"));

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<TodoList />);

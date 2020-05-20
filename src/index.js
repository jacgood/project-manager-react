import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { TodoApp } from "./components/TodoApp";

function App() {
  return (
    <div className="App">
      <h1><span role="img">☄️</span> Effector Todo</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TodoApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

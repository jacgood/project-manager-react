import React from "react";
import { useStore } from "effector-react";

import { $todos, todoToggled, todoRemoved } from "../stores";

export const TodoList = () => {
  const todos = useStore($todos);

  return (
    <div className="todos">
      {todos.map((todo, idx) => (
        <div key={idx} className={`todo${todo.completed ? " -completed" : ""}`}>
          <input
            type="checkbox"
            value={todo.completed}
            onChange={() => todoToggled(idx)}
          />
          <span>{todo.text}</span>
          <button onClick={() => todoRemoved(idx)}>X</button>
        </div>
      ))}
    </div>
  );
};

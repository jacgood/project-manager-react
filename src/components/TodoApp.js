import React from "react";

import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

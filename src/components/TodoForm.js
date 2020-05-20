import React from "react";

import { submitPressed } from "../stores";

import { TodoInput } from "./TodoInput";

export const TodoForm = () => {
  return (
    <form className="form" onSubmit={submitPressed}>
      <TodoInput />
      <button>Add</button>
    </form>
  );
};

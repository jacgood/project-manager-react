import React from "react";
import { useStore } from "effector-react";

import { $todo, inputChanged } from "../stores";

export const TodoInput = () => {
  const todo = useStore($todo);

  return (
    <input
      value={todo}
      onChange={evt => inputChanged(evt.target.value)}
      placeholder="Type something..."
    />
  );
};

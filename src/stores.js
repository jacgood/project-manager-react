import { createStore, createEvent } from "effector";

export const inputChanged = createEvent("Input changed");
export const todoAdded = createEvent("Todo added");
export const todoRemoved = createEvent("Todo removed");
export const todoToggled = createEvent("Todo toggled");
export const submitPressed = createEvent("Submit pressed");

export const $todo = createStore("");
export const $todos = createStore([{ text: "Use Effector", completed: false }]);

$todo.on(inputChanged, (state, value) => value).on(todoAdded, () => "");

$todos
  .on(todoAdded, (todos, text) => [...todos, { text, completed: false }])
  .on(todoRemoved, (todos, idx) => todos.filter((_, curIdx) => curIdx !== idx))
  .on(todoToggled, (todos, idx) => {
    return todos.map((todo, curIdx) => {
      if (curIdx === idx) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  });

submitPressed.watch(evt => {
  evt.preventDefault();
  todoAdded($todo.getState());
});

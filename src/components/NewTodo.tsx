import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (enteredText: string) => void }> = (
  props
) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // *** ?, ! are Typescript features, not only bounded to ref only.
    // const enteredText = todoTextInputRef.current?.value;
    // ? will ensure that if the Ref is connected succesfully, then retrieve the value and store it.
    // ? Otherwise it will store null

    // const enteredText = todoTextInputRef.current!.value;
    // ! will ensure that the value is never null, so store my value

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //! throw an error
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

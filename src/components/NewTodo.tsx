import React, { FormEvent, useRef } from "react";

const NewTodo: React.FC = () => {
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
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
import React, { useState } from "react";
import Todo from "../models/Todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDoHandler = (todoText: string) => {
    // console.log(todoText);
    const newTodo = new Todo(todoText);

    setTodos((currentState) => {
      return currentState.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoID: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoID);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addToDoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;

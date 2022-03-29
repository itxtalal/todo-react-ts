import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

//! Type Annotation
//* FC means it is a Functional Component, it has props.children valid
//* <{}> will merge types with the generic type defined for FC already by TSX
//* Here we are merging items: string[] with the generic type having props.children

//? Describe your custom props <{ here }> for FC
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;

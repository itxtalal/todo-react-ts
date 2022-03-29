import React from "react";

import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

//! Type Annotation
//* FC means it is a Functional Component, it has props.children valid
//* <{}> will merge types with the generic type defined for FC already by TSX
//* Here we are merging items: string[] with the generic type having props.children

//? Describe your custom props <{ here }> for FC
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;

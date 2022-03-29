import { useState } from "react";
import "./App.css";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDoHandler = (todoText: string) => {
    console.log(todoText);
    const newTodo = new Todo(todoText);

    setTodos((currentState) => {
      return currentState.concat(newTodo);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addToDoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;

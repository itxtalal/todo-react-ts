import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/Todo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

  const addToDoHandler = (todoText: string) => {
    console.log(todoText);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addToDoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;

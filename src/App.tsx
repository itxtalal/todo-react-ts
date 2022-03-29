import "./App.css";
import Todos from "./components/Todos";

function App() {
  const items: string[] = ["This is React", "This is Typescript"];

  return (
    <div className="App">
      <Todos items={items} />
    </div>
  );
}

export default App;

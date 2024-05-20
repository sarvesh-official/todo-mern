import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, []);

  return (
    <div className="flex flex-col gap-20">
      <CreateTodo />

      <div className="flex gap-10 flex-wrap ">
        {todos.map((todo, index) => {
          return <Todo key={index} todo={todo} />;
        })}
      </div>
    </div>
  );
}

export default App;

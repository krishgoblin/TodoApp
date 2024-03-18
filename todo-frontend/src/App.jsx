import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from 'axios';
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { RenderTodo } from "./components/RenderTodo";

function App() {
  const [todos, setTodos] = useState([
    // {
    //   title: "learn react",
    //   description: "isafj"
    // },
    // {
    //   title: "Debug this code",
    //   description: "PLEASEEEE"
    // }
  ]);

  useEffect(() => {
    setInterval(() => {
      axios.get("http://localhost:3000/todos").then(function (response) {
        setTodos(response.data.todos);
      });
    }, 3000);
  }, []);

  // fetch("http://localhost:3000/todos").then(async function (res) {
  //   const result = await res.json();
  //   setTodos(result.todos); // cuz we have send todos from our backend
  // });

  return (
    <div>
      <CreateTodo></CreateTodo>
      <RenderTodo todos={todos}></RenderTodo>
    </div>
  );
}

export default App;

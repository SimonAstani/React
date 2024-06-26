import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);


  const addTodo = () => {
    if(todo != ""){
      setTodos([...todos, todo]);
      console.log([...todos,todo]);
      setTodo("");
    }
  }
  
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;

    });
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>Todo Application</h1>

      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo}></TodoInput>
      <TodoList list = {todos} remove={deleteTodo}></TodoList>

    </div>
  );
}

export default App;

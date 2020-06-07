import React, { useState } from "react";
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo}) {
  return (
    <div
      className="todo"
      style={{textDecoration: todo.isComplete ? "line-through" : "" }}>

      {todo.text}
    
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type = "text"
        className = "input"
        value = {value}
        onChange = {e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {

  const [todos, setTodos] = useState([
    { text: "Task 1", isComplete: false },
    { text: "Task 2", isComplete: false },
    { text: "Task 3", isComplete: false },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key = {index}
            index = {index}
            todo = {todo}
            completeTodo = {completeTodo}
            removeTodo = {removeTodo}
          />  
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import './App.css';
import 'bulma/css/bulma.css'

function Todo({ todo, index, completeTodo, removeTodo}) {
  return (
    <div
      className="todo"
      style={{textDecoration: todo.isComplete ? "line-through" : "" }}>

      {todo.text}
    
      <div>
        <button class = "button" onClick={() => completeTodo(index)}>Complete Task</button>
        <button class = "button" onClick={() => removeTodo(index)}>Delete Task</button>
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
    <div class="field has-addons">
      <div class="control is-expanded">
        <form onSubmit={handleSubmit}>
          <input
            class = "input"
            type = "text"
            placeholder = "What do you want to do today?"
            value = {value}
            onChange = {e => setValue(e.target.value)}
          />
        </form>
      </div>
      <div class="control">
        <button type="submit" class="button is-primary">Add</button>
      </div>
    </div>
  );
}

function App() {

  const [todos, setTodos] = useState([
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
        <TodoForm addTodo={addTodo} />
          {todos.map((todo, index) => (
            <Todo
              key = {index}
              index = {index}
              todo = {todo}
              completeTodo = {completeTodo}
              removeTodo = {removeTodo}
            />  
          ))}          
      </div>
    </div>
  );
}

export default App;

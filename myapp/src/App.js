import React, { useState, useReducer } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { initialState, reducer } from "./reducers/reducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, "app state");

  const clearCompleted = () => {
    state.filter(element => element.completed === false)
    };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Todo List</h1>
        <TodoForm dispatch={dispatch} />
      </div>
      <TodoList todos={state} dispatch={dispatch} clearCompleted={clearCompleted}/>
    </div>
  );
}

export default App;

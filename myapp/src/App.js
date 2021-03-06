import React, { useReducer } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { initialState, reducer } from "./reducers/reducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, "app state");

  return (
    <div className="App">
      <div className="App-header">
        <h1>Todo List App</h1>
        <TodoForm dispatch={dispatch} todos={state}/>
      </div>
      <TodoList todos={state} dispatch={dispatch} />
    </div>
  );
}

export default App;

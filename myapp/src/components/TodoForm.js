import React, { useState } from "react";
import { reducer } from "../reducers/reducer";

const TodoForm = props => {
  const [state, setState] = useState("");

  const handleChanges = e => {
    setState(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    props.dispatch({ type: "ADD_TODO", payload: state });
    setState("");
  };

  const removeTodo = e => {
    e.preventDefault();
    props.dispatch({ type: "REMOVE_TODO", payload: state });

  };

  return (
    <form>
      {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
      <input type="text" name="item" value={state} onChange={handleChanges} />
      <button onClick={addTodo}>Add</button>
      <button onClick={removeTodo}>
        Clear Completed Tasks!
      </button>
    </form>
  );
};

export default TodoForm;

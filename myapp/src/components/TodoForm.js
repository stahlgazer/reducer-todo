import React, { useState } from "react";
import { Button } from "reactstrap";

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
      <input
        className="forminput"
        type="text"
        name="item"
        value={state}
        onChange={handleChanges}
      />
      <Button color="success" className="formbutton" onClick={addTodo}>
        Add
      </Button>
      <Button color="danger" className="formbutton" onClick={removeTodo}>
        Clear Completed Tasks!
      </Button>
    </form>
  );
};

export default TodoForm;

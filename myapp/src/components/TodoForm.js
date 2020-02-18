import React, { useState } from "react";
import { Button } from "reactstrap";

const TodoForm = props => {
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  const addTodo = e => {
    console.log(newTodo, "this is newTodo in todo form");
    console.log(props.todos, "this is props.todos");
    e.preventDefault();
    props.dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo("");
  };

  const removeTodo = e => {
    e.preventDefault();
    props.dispatch({ type: "REMOVE_TODO", payload: newTodo });
  };

  return (
    <form>
      <input
        className="forminput"
        type="text"
        name="item"
        value={newTodo}
        onChange={handleChanges}
      />
      <Button color="info" className="formbutton" onClick={addTodo}>
        Add New Task
      </Button>
      <Button color="success" className="formbutton" onClick={removeTodo}>
        Clear Completed Tasks!
      </Button>
    </form>
  );
};

export default TodoForm;

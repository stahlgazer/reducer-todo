import React from "react";
import Item from "./Todo";

const TodoList = props => {
  console.log(props.todos, "my todolist props");

  return (
    <div>
      {props.todos.map(item => (
        <Item key={item.id} item={item} dispatch={props.dispatch} />
      ))}
      <button onClick={props.clearCompleted}>
        Clear Completed Tasks!
      </button>
    </div>
  );
};

export default TodoList;

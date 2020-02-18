import React from "react";
import Item from "./Todo";

const TodoList = props => {
  console.log(props.todos, "my todolist props");

  return (
    <div className="todos">
      {props.todos.map(item => (
        <Item className="todo" key={item.id} item={item} dispatch={props.dispatch} />
      ))}
    </div>
  );
};

export default TodoList;

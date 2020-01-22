import React from "react";

const Item = props => {
  const handleChange = () => {
    props.dispatch({
      type: "COMPLETED",
      payload: props.item.id
    });
    console.log(props.item, "props in todo.js");
  };


  return (
    <div className={`item${props.item.completed ? ' completed' : ''}`}>
      <p onClick={handleChange}>{props.item.item}</p>
    </div>
  );
};

export default Item;

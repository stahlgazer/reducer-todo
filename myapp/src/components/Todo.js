import React from "react";

const Item = props => {
  const handleChange = () => {
    props.dispatch({
      type: "COMPLETED",
      payload: props.item.id
    });
    console.log(props.item, "props in todo.js");
  };

  // const checked = () => {

  // }

  return (
    <div
      onClick={handleChange}
      className={`item${props.item.completed ? " completed" : ""}`}
    >
      <div>
      <p>
        <input type="checkbox" /> {props.item.item}
      </p>
      </div>
    </div>
  );
};

export default Item;

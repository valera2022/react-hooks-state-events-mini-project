import React from "react";

function Task({taskData,onDelete}) {
  //console.log(taskData)

  function handleClick(){
    onDelete(taskData.text)
  }
  return (
    <div className="task">
      <div className="label">{taskData.category}</div>
      <div className="text">{taskData.text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;

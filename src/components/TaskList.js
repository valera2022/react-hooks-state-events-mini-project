import React from "react";
import Task from "./Task";
import{v4 as uuid} from 'uuid'

function TaskList({tasksData, onDelete,selectedCategory}) {
  console.log(selectedCategory)

 const filterTask = tasksData.filter( (data) => selectedCategory === "All"  || data.category === selectedCategory   ) 
 console.log(filterTask)


  
  
  return (
    <div className="tasks">
      
      
     
      {filterTask.map(taskitem => {
        return <Task key={uuid()} taskData={taskitem} onDelete={onDelete} />
      
     }
      
      )

      
      /* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;

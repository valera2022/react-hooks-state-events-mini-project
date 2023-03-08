import {React, useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const[task,setTask]= useState(TASKS)
  const[category,setCatergory] = useState("All")
  


  function handleDelete(deleteTask){
    console.log(deleteTask)
     setTask(task.filter(x => x.text !== deleteTask  ))
     
  }
  



  function handleAdd(newTask){
    setTask([...task, newTask])



  }
 


  




  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCatergory}  />
      <NewTaskForm onTaskFormSubmit={handleAdd} categories={CATEGORIES} selectedCategory={category} setCat={setCatergory}/>
      <TaskList tasksData={task} onDelete={handleDelete} selectedCategory={category}/>
      
    </div>
  );
}

export default App;
//so you'll need to pass that data down to the components that need it as props.
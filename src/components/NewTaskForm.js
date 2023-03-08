import {React, useState} from "react";







function NewTaskForm({categories, onTaskFormSubmit }) {
  const[inputText,setInputText]= useState("")
  const [select,setselect]= useState("code")
console.log(categories)


 

function handleText(event){
  console.log(event.target.value)
  setInputText(event.target.value)

}

function handleSelect(event){
  console.log(event.target.value)
 // setCat(event.target.value)
 setselect(event.target.value)



}
function handleButton(event){
  console.log(event.target.value)

}

function handleForm(event){
  event.preventDefault()
  onTaskFormSubmit({
    text:inputText,
    category:select
  })
  setInputText("")
  setselect("code")
}





  return (
     <form className="new-task-form"  onSubmit={handleForm}>
      <label>
        Details
        <input type="text" name="text" value={inputText} onChange={handleText}/>
      </label>
      <label>
        Category
        <select value={select} name="category"onChange={handleSelect}>
          {categories.map((category) => {
             return <option value={category === "All"? null : category}>{category === "All"? null : category}</option>
          })
          /* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" onClick={handleButton} />
    </form>
  );
}

export default NewTaskForm;

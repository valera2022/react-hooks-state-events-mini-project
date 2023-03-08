import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectCategory}) {
  //console.log(selectedCategory)
   //const filterCats = categories.filter((category) => category.includes(selectedCategory))
   //console.log(filterCats)
   const categoryButtons = categories.map(
     category =>  {const className = category  === selectedCategory ? "selected" : null 
    return (
      <button key ={category} className={className} value={category} onClick={updateCategory}>
        {category} 
        </button>
    )} 
   )
  
  function updateCategory (event){
    console.log(event.target.value)
   
    onSelectCategory(event.target.value)
  

 
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;

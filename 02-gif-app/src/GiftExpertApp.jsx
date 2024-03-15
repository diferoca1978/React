import { useState } from "react"
import { AddCategory, GiftGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = ( newCategory ) => {

    // Check if newCategory exists in categories array.

    if ( categories.includes(newCategory))return;
    
    setCategories([ newCategory, ...categories]);
    
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
        onNewCategory = {onAddCategory} 
      />

      {/* Gif list */}
      
        {
          categories.map(category => (
            
            < GiftGrid 
              key= {category} 
              category= {category}/>

          ))
        }
      

      {/* Gif item */}
    
    </>
  )
}
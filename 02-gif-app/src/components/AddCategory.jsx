import { useState } from "react"
import PropTypes from 'prop-types';


export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  //* To get the input value
  const onChangeInput = ({target}) => {

    setInputValue(target.value)

  }

  //* To prevent the form default event onSubmit
  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    // (OLD) setCategories(categories => [inputValue, ...categories]); // Here insert the new categories 
    onNewCategory(inputValue.trim()); // Here insert the new categories but this is the best way.
    setInputValue(''); // Here we're cleaning our input before insert a new category.

  } 


  return (
    <form onSubmit={onSubmit}>
      <input

        type="text"
        placeholder="Search gif" 
        value={ inputValue }
        onChange={onChangeInput}

      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func,
}
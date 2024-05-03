import { useState } from "react";


export const useForm = (initialForm = {}) => {
  
  const [formState, setFormState] = useState(initialForm)

  const onInputChange = ({target}) => {

    const {name, value} = target;
    setFormState({
      ...formState,
      [ name ]: value //* This is a computed or dinamic property in Java script more information https://desarrolloweb.com/articulos/computed-property-javascript or can watch this video tutorial https://www.youtube.com/watch?v=CaO8Mp1mtzQ&t=299s
    })
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }


  return {
    formState,
    onInputChange,
    onResetForm
  }
}

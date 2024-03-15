// If we need to put the focus in the input when we make click on the button the traditional method will be:

import { useRef } from "react"

export const FocusOnInput = () => {

  const inputRef = useRef(); //* The main idea of useRef is hold a reference of something and, when it change not launch a new renderization.
  

  const onClick = () => {

    // document.querySelector('input').select() //? This is the traditional method. But it not warrant that allways select the correct input if there were more. And is here when we can use the (useRef Hook).

    inputRef.current.select();

  }

  return (
    <>
      <h1>Form Focus</h1>
      <hr />

      <div className="container">
        <label htmlFor="exampleInput" className="form-label mb-0">Name</label>
        <input ref={inputRef} type="text" className="form-control mb-3" placeholder="Insert name" id="exampleInput"/>
        <button className="btn btn-primary" onClick={ onClick }>On focus</button>
      </div>
    
    </>
  )
}

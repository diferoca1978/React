//import React from "react";
import { useCounter, useFetch } from "../hooks"
import { LoadingState } from "./index";
import { PokemonCard } from "./index";


export const MultipleCustomHook = () => {
  

  const {counter, increment, decrement, reset} = useCounter(1)
  const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);


  return (
    <>
      <h1>Pokemon Info</h1>
      <hr />

      {
          isLoading 
          ? <LoadingState/> 
          : (
          <PokemonCard 
          id={counter}
          name={data.name}
          sprites={ [
            data.sprites.front_default,
          ] } />
        ) 
      }

      {hasError && <p>An error has ocurred</p> }
      <hr />

      <button className="btn btn-primary mt-2" onClick={ () => counter > 1 ? decrement() : null } >Previous</button>
      <button className="btn btn-primary mt-2" onClick={ () => increment() } >Next</button>
      <button className="btn btn-primary mt-2" onClick={ () => reset() } >Reset</button>

      
    
    </>
  )
}

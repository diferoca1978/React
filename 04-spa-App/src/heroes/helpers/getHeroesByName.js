import { useLoaderData } from "react-router-dom";


export const GetHeroesByName = (name = '') => {

  const { heroes } = useLoaderData()
  
  name = name.toLowerCase().trim();

  if (name.length === 0 ) return [];

  return heroes.filter(
    heroe => heroe.superhero.toLowerCase().includes( name )
  ) 

}

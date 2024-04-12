import { useLoaderData } from "react-router-dom";


export const MarvelPage = () => {
  const { heroes } = useLoaderData() 

  return (
    <>
      <div>
      {heroes.map(hero => (
        <ul key={hero.id}>
          <li>
            {hero.publisher === 'Marvel Comics' ? hero.superhero : ''} 
          </li>
        </ul>
      ))}
      </div>
    </>
  )
}

export const marvelLoader = async() => {
   const res = await fetch('http://localhost:3001/heroes')
   const heroes = await res.json()
   return {heroes}; 
} 



import { useLoaderData } from "react-router-dom"


export const GetHeroById = ( id ) => {
  const {heroes} = useLoaderData()

  return heroes.find((heroe) => heroe.id === id )
}

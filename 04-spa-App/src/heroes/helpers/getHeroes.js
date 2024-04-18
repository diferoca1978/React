import { useLoaderData } from "react-router-dom"


export const GetHeroes = (publisher) => {

  const { heroes } = useLoaderData()

  const validPublishers = ['Marvel Comics', 'DC Comics']
  
  if(!validPublishers.includes(publisher)) {
    throw Error(`${publisher} it's not valid publisher`)
  }

  return heroes.filter((hero) => hero.publisher === publisher)
}

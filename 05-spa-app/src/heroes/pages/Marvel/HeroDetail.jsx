import { useLoaderData } from "react-router-dom"


export const HeroDetail = () => {

  const {heroe} = useLoaderData()
  console.log(heroe)

  return (
    <>
      <h1>HeroDetail</h1>
      
    </>
  )
}



export const UseHeroDetailLoader = async({ params }) => {

  const getHeroe = async () => {
    const res = await fetch('http://localhost:3000/heroes')
    const heroe = await res.json()

    return heroe.find((heroe) => heroe.id === params.id)
  }
  const oneHeroe = await getHeroe()

  return {oneHeroe}
}
 
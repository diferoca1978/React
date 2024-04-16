

export const Loader = async() => {
  const res = await fetch('http://localhost:3000/heroes')
  const heroes = await res.json()

  return {heroes}
}

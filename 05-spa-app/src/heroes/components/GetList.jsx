import { GetHeroes } from "../helpers/getHeroes"
import { HeroCard } from "./HeroCard"


export const GetList = ({publisher}) => {

  const heroes = GetHeroes(publisher)

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          heroes.map((heroe) => (
            <HeroCard 
              key={heroe.id}
              {...heroe}
            />
          ))
        }
      </div>
    </>
  )
}

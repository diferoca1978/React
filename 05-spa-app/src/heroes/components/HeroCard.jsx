import { NavLink } from "react-router-dom"
import { HeroDetail } from "../pages/Marvel/HeroDetail"

export const HeroCard = ({
  id,
  superhero,
  alter_ego

}) => {

  const imgUrl = `../../../public/heroes/${id}.jpg`
  
  return (
    <>
      {/* CARD */}
      <div className="rounded-xl shadow-lg">
        <div className="p-3 flex flex-col">
          <div className="rounded-xl overflow-hidden mb-2">
            <img className="h-60 w-full" src={imgUrl} alt={superhero} />
          </div>
          <div>
            <h3 className="text-lg text-slate-500 font-semibold">{superhero}</h3>
            <span className="text-slate-400 font-semibold"> {alter_ego} </span>
          </div>
          <NavLink to={`/marvel/${id}`} >
            More Info....
          </NavLink>
        </div>
      </div>
    </>
  )
}

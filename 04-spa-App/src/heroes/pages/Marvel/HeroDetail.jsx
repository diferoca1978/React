import { useMemo } from "react";
import { NavLink, Navigate, useParams } from "react-router-dom"
import { GetHeroById } from "../../helpers/getHeroById"



export const HeroDetail = () => {

  const {id} = useParams();
  
  const hero = useMemo(() => GetHeroById( id ), [id]) ;

  if(!hero) {
    return <Navigate to="/marvel" />
  }

  const imgUrl = `../../../heroes/${id}.jpg`

  return (
    <>
      {/* CARD */}
      <div className="relative rounded-xl shadow-lg max-w-screen-sm p-3">

        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-2 rounded-xl overflow-hidden">
            <img  src={imgUrl} alt={hero.superhero} 
              className=
              "h-60 w-full animate animate-fade-right animate-once animate-duration-[900ms] animate-delay-[400ms] animate-ease-in animate-alternate"
            />
          </div>
          
          <div className="col-span-2 flex flex-col">
            <h3 className="text-lg text-slate-700 font-semibold">{hero.superhero}</h3>
            <span className="text-slate-500 font-semibold"> {hero.alter_ego} </span>
            <span className="text-slate-500 font-semibold"> {hero.first_appearance} </span>
            <span className="text-slate-500 font-semibold"> {hero.characters} </span>
          </div>
        
          <NavLink 
          className="absolute right-2 bottom-1 animate-bounce animate-thrice animate-duration-[1200ms] animate-delay-[400ms] animate-ease-linear animate-normal animate-fill-forwards" 
          to={-1} 
          >
            Back to....
          </NavLink>
        </div>
      </div>
      
    </>
  )
}

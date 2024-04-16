import { NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <>
      <button>
        <NavLink
        to='/'
        >
          <img className="inline-block ring-2 w-16 h-16 rounded-full overflow-hidden border border-slate-800" src="../../../../heroes/HeroesLogo.jpeg" alt="Logo" />
        </NavLink>
      </button>
      
    </>
  )
}

import { NavLink } from "react-router-dom"


export const Logo = () => {
  return (
    <>
      <button>
      <NavLink to="">
        <img className="w-24 h-auto p-2" src="../../assets/Marvel_Logo.svg" alt="logo" />
      </NavLink>
      </button>
    </>
  )
}

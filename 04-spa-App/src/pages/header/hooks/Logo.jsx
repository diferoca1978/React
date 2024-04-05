import { NavLink } from "react-router-dom"


export const Logo = () => {
  return (
    <>
      <button>
      <NavLink to="">
                <img className="w-24 h-auto" src="../../assets/logo.png" alt="logo" />
              </NavLink>
      </button>
    </>
  )
}

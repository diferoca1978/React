import { NavLink } from "react-router-dom"
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const HeroesPages = () => {
  return (
    <>
      
        <div>
        <NavLink
          to='/marvel'
          className={({isActive}) => `${isActive ? 'text-sky-500' : ''} mr-3`}
        >
          Marvel
        </NavLink>
        </div>

        <div>
        <NavLink
          to='/dc'
          className={({isActive}) => `${isActive ? 'text-sky-500' : ''}`}
        >
          Dc
        </NavLink>
        </div>
      
    </>
  ) 
}

const UserPages = () => {
  return (
    <>
      <div>
        <NavLink
        to='/login'
        className={({isActive}) => `${isActive ? 'text-sky-500': ''} mr-3`}
        >
          Login
        </NavLink>
      </div>

      <div>
        <NavLink
        to='/register'
        className={({isActive}) => `${isActive ? 'text-sky-500': ''}`}
        >
         Sing up 
        </NavLink>
      </div>
    </>
  ) 
}

export const Nav = () => {
  const [isToggle,setIsToggle] = useState(false)

  const toggleNav = () => {
    setIsToggle(!isToggle) 
  }
  return(
    <>
      <nav >
        <div className="hidden justify-end p-2 border-b border-slate-500 sm:flex">
          <HeroesPages />
        </div>

        <div className="hidden justify-end p-2 sm:flex">
          <UserPages />
        </div>

        <div className="relative">
          <button onClick={toggleNav} className="text-xl hover:-translate-y-1 duration-300 sm:hidden"> 
            {isToggle ? <FontAwesomeIcon icon={faCircleXmark} /> : <FontAwesomeIcon icon={faBars}/>}
          </button>

          {isToggle && (
            <div className="sm:hidden absolute right-0 top-7 bg-slate-100 p-2 w-28 rounded-lg  divide-y divide-slate-500">
              <HeroesPages />
              <UserPages />
            </div>
          )}
        </div> 
      </nav>
     
      
    </>
  ) 
}


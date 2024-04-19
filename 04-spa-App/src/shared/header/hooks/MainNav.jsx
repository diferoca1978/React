import { NavLink, useNavigate } from "react-router-dom"
import { faBars, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { AuthContext } from "../../../auth/context/AuthContext";



const HeroesPages = () => {
  return (
    <>
        <div>
        <NavLink
          to='/search'
          className={({isActive}) => `${isActive ? 'text-sky-500' : ''}font-primary mr-3`}
        >
          Search
        </NavLink>
        </div>

        <div>
        <NavLink
          to='/marvel'
          className={({isActive}) => `${isActive ? 'text-sky-500' : ''}font-primary mr-3`}
        >
          Marvel
        </NavLink>
        </div>

        <div>
        <NavLink
          to='/dc'
          className={({isActive}) => `${isActive ? 'text-sky-500' : ''}font-primary`}
        >
          Dc
        </NavLink>
        </div>
    </>
  ) 
}


const UserPages = () => {

  const { user } = useContext( AuthContext );
  console.log(user);

  const navigate = useNavigate()

  const onLogout = () => {
    navigate('/login', {
    replace: true
    })
  }

  return (
    <>
      <div>
          <NavLink
          to='/login'
          className={({isActive}) => `${isActive ? 'text-sky-500': ''} font-primary mr-3`}
          >
            Login
          </NavLink>
        </div>

        <div>
          <NavLink
          to='/register'
          className={({isActive}) => `${isActive ? 'text-sky-500': ''} font-primary mr-3`}
          >
          Sing up 
          </NavLink>
        </div>

        <div className="mr-3">
          Not implemented
        </div>

        <div>
          <button onClick={onLogout} className="text-base italic">
            LogOut
          </button>
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
        <div className="hidden justify-end items-center space-x-2 p-2 border-b border-slate-500 sm:flex">
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


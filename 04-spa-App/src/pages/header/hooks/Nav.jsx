import { NavLink } from "react-router-dom"
import { AlignJustify, WrapText, UserPlus, User } from 'lucide-react';
import { useState } from "react";



const Links1 = () => {
  return (
    <>
      <NavLink 
        to="/productshome" 
        className={({isActive}) => isActive ? 'text-UT-orange': 'text-Selective-yellow'}
        >Home services
      </NavLink>

      <NavLink 
        to="/productscompany" 
        className={({isActive}) => isActive ? 'text-UT-orange': 'text-Selective-yellow'}
        >Company services
      </NavLink>
            
      <NavLink 
        to="/about" 
        className={({isActive}) => isActive ? 'text-UT-orange': 'text-Selective-yellow'}
        >About
      </NavLink>

    </>
  )
};

const Links2 = () => {
  return (
      <>
      <div className="flex flex-col items-center my-2 text-Selective-yellow">
        <UserPlus />
        <NavLink 
          to="/singup" 
          className={({isActive}) => isActive ? 'text-UT-orange': 'text-Selective-yellow'}
          >Sing up
        </NavLink>
      </div>

      <div className="flex flex-col items-center text-Selective-yellow">
        <User />
        <NavLink 
          to="/login" 
          className={({isActive}) => `${isActive ? 'text-UT-orange': 'text-Selective-yellow'}`}
          >Login
        </NavLink>
      </div>

      </>
  )
}


export const Nav = () => {

  const [isToggle, setIsToggle] = useState(false);

  const toggleNav = () => {
    setIsToggle(!isToggle)
  }

  return (
    <>
      <nav className="flex-wrap w-1/3 justify-end leading-none text-center mr-2">
        <div className="hidden w-full justify-between p-3 sm:flex ">
          <Links1 />
        </div>

        <div className="hidden justify-end p-3 border-t border-Sky-blue sm:flex">
          <Links2 />
        </div>

        <div className="sm:hidden text-Selective-yellow text-right">
          <button onClick={toggleNav}>
            {isToggle ? <WrapText /> : <AlignJustify /> }
          </button>
        </div>
      </nav>
      {isToggle && (
        <div className="fixed top-14 right-0 flex flex-col w-auto text-center p-2 border border-Sky-blue rounded-lg bg-Prussian-blue bg-opacity-95 sm:hidden">  
          <Links1 />
          <hr />
          <Links2 />
        </div>
      )}
    </>
  )
}




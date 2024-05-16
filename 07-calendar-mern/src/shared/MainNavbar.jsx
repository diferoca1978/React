
import { Link, NavLink } from "react-router-dom";

import { faPiedPiperAlt } from "@fortawesome/free-brands-svg-icons";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

export const MainNavbar = () => {

  const isAuthenticated = false

  return (
    <Navbar isBordered className="bg-blueDark-800">
      <NavbarBrand className="justify-start"  >
        <FontAwesomeIcon className="text-yellow-500 h-10" icon={faPiedPiperAlt} />
        <div className="text-xl font-extrabold">
          <p className="bg-clip-text text-transparent bg-gradient-to-r  from-yellow-600 to-orange-200 ">Calendar</p>
        </div>
      </NavbarBrand>

      {!isAuthenticated
        ? (
          <NavbarContent justify="end">
            <NavbarItem>
              <Link to='/auth/login' className="flex items-center sm:mr-3 ">
                <p className="text-yellow-500 font-semibold mr-2">Sing In</p>
                <FontAwesomeIcon className="text-yellow-600" icon={faUserAstronaut} />
              </Link>
            </NavbarItem>
          </NavbarContent>
        ) : (
          <NavbarContent justify="end">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="default"
                  name="DR"
                  size="sm"
                  src=''
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile actions" variant="shadow">
                <DropdownItem key='Profile actions' className="h-4 gap-2 mb-3 pointer-events-none" >
                  <p className="font-semibold text-blueDark-800">Signed in as</p>
                  <p className="font-semibold text-blueDark-800">jhon@ejemplo.com</p>
                </DropdownItem>
                <DropdownItem key='profile' className="text-blueDark-800">
                  {/* TODO: profile page not implemented */}
                  <NavLink to='/auth/profile' className='font-semibold'>
                    Profile
                  </NavLink>
                </DropdownItem>
                <DropdownItem key='Logout' className="text-danger-500">
                  {/* TODO: profile page not implemented */}
                  <NavLink to='/' className="font-semibold" >
                    Logout
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        )

      }
    </Navbar >
  )
};

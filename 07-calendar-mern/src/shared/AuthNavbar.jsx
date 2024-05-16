import { faPiedPiperAlt } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Navbar, NavbarBrand } from "@nextui-org/react"

export const AuthNavbar = () => {
  return (
    <Navbar isBordered className="bg-blueDark-800">
      <NavbarBrand className="justify-center"  >
        <FontAwesomeIcon className="text-yellow-500 h-10" icon={faPiedPiperAlt} />
        <div className="text-xl font-extrabold">
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-200 ">Calendar</p>
        </div>
      </NavbarBrand>
    </Navbar>
  )
}

import { Logo } from "../hooks/Logo"
import { Nav } from "../hooks/MainNav"

export const NavBar = () => {
  return (
    <>
      <div className="sticky z-50 top-0 w-full bg-slate-50 border border-b-slate-200 p-3">
        <div className="flex justify-between items-center">
          <Logo />
          <Nav />
        </div>
      </div>
    </>
  )
}


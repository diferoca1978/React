import { Logo } from "../hooks/Logo"
import { Nav } from "../hooks/Nav"

export const Header = () => {
  return (
    <>
      <header className="shadow sticky z-50 top-0 bg-Prussian-blue mx-auto w-full border-b border-Sky-blue">
        <div className="flex justify-between items-center">
          <Logo />
          <Nav />
        </div>
      </header>
    </>
  )
}


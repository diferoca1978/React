import { Outlet } from "react-router-dom"
import { NavBar } from "../shared/components/NavBar"
import { Footer } from "../shared/components/Footer"


export const MainLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>
      
      <footer>
        <Footer/>
      </footer>
    </>

  )
}

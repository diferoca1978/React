import { Outlet } from "react-router-dom"
import { AuthNavbar, Footer } from "../shared"


export const AuthLayout = () => {
  return (
    <>
      <header>
        <AuthNavbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

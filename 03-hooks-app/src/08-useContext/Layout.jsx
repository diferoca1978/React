import { Outlet } from "react-router-dom"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { UserProvider } from "./context/UserProvider"


export const Layout = () => {
  return (
    <UserProvider>
      <Header />
      <Outlet />
      <Footer />
    </UserProvider>
  )
}

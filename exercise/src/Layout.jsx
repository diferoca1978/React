import { Outlet } from "react-router-dom"
import { Header } from "./pages/header/components/Header"
import { Footer } from "./pages/footer/components/Footer"


export const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

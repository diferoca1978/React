import { Outlet } from "react-router-dom";
import { Footer } from "../shared/footer/components/Footer";
import { NavBar } from "../shared/header/components/MainNavBar";




export const MainLayout = () => {
  return (
    <>
      
      <header>
        <NavBar />
      </header>
      <main className="p-2 bg-slate-50">
          <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      
    </>
  )
}

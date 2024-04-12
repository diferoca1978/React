import { Outlet } from "react-router-dom";
import { Footer } from "../shared"
import { AuthNav } from "../shared/header/components/AuthNav"


export const AuthLayout = () => {
  return (
    <>
      <header>
        <AuthNav />
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

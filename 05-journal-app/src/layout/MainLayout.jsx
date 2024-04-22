import { Outlet } from "react-router-dom"


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

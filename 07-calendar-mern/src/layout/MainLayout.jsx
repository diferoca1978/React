import { Outlet } from "react-router-dom";
import { Footer, MainNavbar } from "../shared";

export const MainLayout = () => {
  return (
    <>
      <header>
        <MainNavbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

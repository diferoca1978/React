import { createBrowserRouter,createRoutesFromElements, Route } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { ErrorPage } from "../shared";
import { MarvelPage, DcPage, Home } from "../heroes/pages";
import { AuthLayout } from "../layout/AuthLayout";
import { Login, SingUp } from "../auth/pages";
import { Loader as marvelLoader } from "../heroes/hooks/UseHeoresLoader";
import { Loader as dcLoader } from "../heroes/hooks/UseHeoresLoader";
import { HeroDetail } from "../heroes/pages/Marvel/HeroDetail";




export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route
      path="/"
      element={<MainLayout />}
      errorElement={<ErrorPage />}
    >
      <Route index element={<Home />} />
        <Route path="marvel">
          <Route element={<MarvelPage />} index loader={marvelLoader} />
          <Route path=":id" element={<HeroDetail />} loader={marvelLoader}/>
        </Route>
                    
        <Route 
        path="dc" 
        element={<DcPage />}
        loader={dcLoader}
        />
    </Route>

    <Route
      element={ <AuthLayout /> }
      errorElement={ <ErrorPage />}
    >
        <Route path="login" element={<Login />} />
        <Route path="register" element= {<SingUp />} />
    </Route>
    </>


    
  )
)

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: 'marvel',
//         element: <MarvelPage />
//       },
//       {
//         path: 'dc',
//         element: <DcPage />
//       },
//       {
//         path: 'login',
//         element: <Login />
//       },
//       {
//         path: 'register',
//         element: <SingUp />
//       }
//     ]
//   }
// ])
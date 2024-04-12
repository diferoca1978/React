import { createBrowserRouter,createRoutesFromElements, Route } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { ErrorPage } from "../shared";
import { MarvelPage, DcPage, Home, marvelLoader } from "../heroes/pages";
import { AuthLayout } from "../layout/AuthLayout";
import { Login, SingUp } from "../auth";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route
      path="/"
      element={<MainLayout />}
      errorElement={<ErrorPage />}
    >
        <Route index element={<Home />} />
        <Route 
          path="marvel" 
          element={<MarvelPage />}
          loader={marvelLoader}
        />
        <Route path="dc" element={<DcPage />} />
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
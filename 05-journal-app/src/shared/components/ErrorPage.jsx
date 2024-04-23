import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {

  const error = useRouteError();

  return (
    <>
      <div >
        <div>
          <img src="../../heroes/404.png" alt="error" />
        </div>
        <div>
          <h1>Oops!!</h1>
          <h3>Sorry, an unexpected error has ocurred</h3>
          <h4>
            <i>{error.statusText || error.message}</i>
          </h4>
          <button>
             <NavLink to='/home' >Go Home </NavLink>
          </button>
        </div>
      </div>
    </>
  )
}
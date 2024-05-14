import { useRouteError, NavLink } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <h1>errorpage</h1>
      {/* <div className="flex flex-col items-center p-8 m-3 text-center rounded-lg border w-auto">
        <div>
          <Image isBlurred width={300} src="../../images/404.png" alt="error" />
        </div>
        <div>
          <h1>Oops!!</h1>
          <h3>Sorry, an unexpected error has ocurred</h3>
          <h4>
            <i>{error.statusText || error.message}</i>
          </h4>
          <button className="bg-sky-800 p-2 w-40 rounded-xl shadow-lg hover:bg-sky-600 duration-300 mt-3">
            <NavLink
              to="/"
              className="flex justify-between items-center text-white font-semibold tracking-wide"
            >
              Go Home
              <i className="fa-sharp fa-solid fa-circle-left"></i>
            </NavLink>
          </button>
        </div>
      </div> */}
    </>
  );
};

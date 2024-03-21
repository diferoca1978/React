import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center">
        <h1>!404 not found</h1>
        
          <Link to='/' className="btn btn-warning btn-sm"> Go to home page</Link>
      </div>
    </>
  )
}

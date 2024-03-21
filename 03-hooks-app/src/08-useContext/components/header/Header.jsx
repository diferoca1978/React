import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-xl rounded-3" style={{backgroundColor: '#023047'}}>
        <div className="container-fluid d-flex justify-content-start">
          <Link to={''} className="navbar-brand">
            <img src="../../../../assets/img/logo.png" alt="Brand" width={150} height={90}/>
          </Link>
          <NavLink
              to=''
              style={({isActive})=>{
                return{
                  fontWeight: isActive ? 'bold': '' ,
                  textDecoration: isActive ? 'none' : 'none' ,
                  color: isActive ? '#FB8500' : '#FFB703',
                  marginRight: isActive? '20px' : '20px',
                   
                }
              }}>
                Home
            </NavLink>

            <NavLink
              to='about'
              style={({isActive})=>{
                return{
                  fontWeight: isActive ? 'bold': '' ,
                  textDecoration: isActive ? 'none' : 'none' ,
                  color: isActive ? '#FB8500' : '#FFB703',
                  marginRight: isActive? '20px' : '20px'
                }
              }}>
                About
            </NavLink>

            <NavLink
              to='login'
              style={({isActive})=>{
                return{
                  fontWeight: isActive ? 'bold': '' ,
                  textDecoration: isActive ? 'none' : 'none' ,
                  color: isActive ? '#FB8500' : '#FFB703',
                }
              }}>
                Login
            </NavLink>
            
          </div>  
      </nav>
    </>
  )
}

import PropTypes from 'prop-types'
import { UserContext } from "./UserContext"

const user = {
  id: 1,
  name: 'Diego Rodriguez',
  email: 'diferoca@google.com'
}

//* this is a HOC because it's receiving the property called childern
export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{Hola: 'Mundo', user: user}}>
        {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.array
}
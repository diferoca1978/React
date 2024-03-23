import PropTypes from 'prop-types'
import { UserContext } from "./UserContext"
import { useState } from 'react'


//* this is a HOC because it's receiving the property called childern
export const UserProvider = ({ children }) => {

  const [user, setUser ] = useState()

  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.array
}
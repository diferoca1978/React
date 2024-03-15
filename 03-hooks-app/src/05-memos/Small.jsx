import React from "react";
import PropTypes from 'prop-types'

export const Small = React.memo(({value}) => {

  console.log('Rerendering :(');

  return (
    <small>{value}</small>
  )
})

Small.propTypes = {
  value: PropTypes.number
}

Small.displayName = 'Small';


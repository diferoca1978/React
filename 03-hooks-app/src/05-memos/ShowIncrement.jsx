import React from "react";
import PropTYpes from 'prop-types'

export const ShowIncrement = React.memo(({ increment }) => { // Here we're using memo to record the output of this functional component

  console.log('Recreated again :( ');

  return (
    <>
      <button
      className="btn btn-primary mt-3"
      onClick={increment}
      > Increment by 1</button>

    </>
  )
})

ShowIncrement.propTypes = {
  increment: PropTYpes.func
}

ShowIncrement.displayName = 'ShowIncrement';
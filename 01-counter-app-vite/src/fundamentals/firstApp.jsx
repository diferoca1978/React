import PropTypes from 'prop-types'

//* This is our child component.

export const FirstApp = ({firstName, profession, hobbies}) => {

  if (!firstName) {
    throw new Error('Missing title');
  }

  return (
    <>
      <h1>User:</h1>
      <h3>{firstName}</h3>
      <p>{profession}</p>
      <p>{hobbies}</p>
    </>
    
  )
}

//* this is our prop-types object.

FirstApp.propTypes = {
  firstName: PropTypes.string.isRequired,
  profession: PropTypes.string,
  hobbies: PropTypes.string
} 

//* this is our defaultProptypes object.

FirstApp.defaultProps = {
  firstName: 'Missing Name',
  profession: 'Missing Profession',
  hobbies: 'Missing Hobbies'
}


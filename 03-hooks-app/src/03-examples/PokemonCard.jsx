import PropTypes from 'prop-types'

export const PokemonCard = ({id, name, sprites = []}) => {

  return (
    <>
      <div className="card text-center text-black border border-primary border-4" style={{width: 300}}>

        {sprites.map( sprite => (
          <img key={sprite}  src={sprite} className="card-img-top" alt={name} />
        ) )}
        <div className="card-body  text-white bg-primary border-top border-info border-4">
        <h5 className="card-title">#{id}</h5>
          <p className="card-text" ><strong>{name}</strong></p>
        </div>
          
      </div>  
    </>
  )
}

PokemonCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  sprites: PropTypes.array
}
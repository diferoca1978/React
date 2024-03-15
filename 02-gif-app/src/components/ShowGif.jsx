import PropTypes from 'prop-types'

export const ShowGif = ({title, url}) => {

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title }</p>
    </div>
  )
}

ShowGif.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
}

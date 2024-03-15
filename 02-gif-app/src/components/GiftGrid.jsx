import PropTypes from 'prop-types' 

import { ShowGif } from './ShowGif';
import { useFetchGifts } from '../hooks/useFetchGifts';

export const GiftGrid = ({ category }) => {


  const {images, isLoading} = useFetchGifts(category)
  


  return (
    <>
      <h3> {category} </h3>

        {
          isLoading && ( <h2> Loading.... </h2> )
        }

        <div className="card-grid">
          {
             images.map((image) => (
              < ShowGif
              key={image.id} 
              {...image}
              />
            ))
          }
        </div>
      
    </>
  )
}
 GiftGrid.propTypes = {

  category: PropTypes.string.isRequired,

 }
import { useEffect, useState } from "react";

import { getGifts } from "../helpers/getGifts";


export const useFetchGifts = ( category ) => {
  
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  //* to avoid the use of .then() in the useEffect hook, we can make this instead:
  //* Separate the way of obtaining the images in a separate function, because useEffect hook doesn't work with async/await.
  const getImages = async() => {
    const newImages = await getGifts(category);
    setImages(newImages);
    setIsLoading(false)
  }
  
  useEffect(() => {
  
    getImages()
  
  }, [])


  return {
    images: images,
    isLoading: isLoading,
  }
}

import { useEffect, useState } from "react";


const localCache = {};


export const useFetch = (url) => {
  
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null
  })
  
  useEffect(() => {
    
    getData();
   
  }, [url])


  const setLoadingState = () => { // here we're setting the state before of bring the data.
   setState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null
   })
  }
  
  const getData = async() => {

    if (localCache[url]) { // Here before the get the data we're setting the state to use the cache if it exists.
    setState({
    data: localCache[url],
    isLoading: false,
    hasError: false,
    error: null
    });
    return;
    }

    setLoadingState();
   
    const resp = await fetch(url);

    await new Promise((resolve) => setTimeout(resolve, 700));

    if (!resp.ok) {
      setState({
        data:null,
        isLoading:false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText
        }
      });
      return;
    }

    const data = await resp.json();
    setState({
      data: data,
      isloading: false,
      hasError: false,
      error: null
    })

    //TODO: handle cache.
    //* Here we're to handle that not to do more http request when we already know what is the url because we have already used it.
    localCache[url] = data; // Through this code we're assign the data to a property in the object localCache wich was declared above outside our custom hook. 

  }
  
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError

  } 
}

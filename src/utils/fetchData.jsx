import axios from 'axios';


export const exerciseOptions = {

    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_REACT_APP_RAPID_API_ENDPOINT_EXERCISE
    },

  };
  
  export const youtubeOptions = {

    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_REACT_APP_RAPID_API_ENDPOINT_YOUTUBE
    },
    
  };


export const fetchData = async (url, options) => {

    const { data } = await axios.get(url, options);
  
    console.log(data);
    return data;
  
  };




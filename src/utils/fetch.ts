import axios from 'axios';
const API_KEY = 'SLsDcYVRqA4Z8rQNlsLfkngffBmkyOfO458Y6dea';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export const fetchData = async (urlParams?: string) => {
  try {
    const response = await axios.get(
      `${API_URL}?api_key=${API_KEY}${
        typeof urlParams !== 'undefined' && urlParams?.length > 0
          ? urlParams
          : ''
      }`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

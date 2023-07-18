const API_KEY1 = 'SLsDcYVRqA4Z8rQNlsLfkngffBmkyOfO458Y6dea';
const API_KEY2 = 'Gwz2Vutd71eEWq3ud2Qgg84XWmPdRuuoI56HJkSR';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export const fetchData = async (urlParams?: string) => {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY2}${urlParams ? urlParams : ''}`
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Request failed');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

import axios from "axios";
import {loadingStatus} from '../utils/globalState'   
const  getDataForecast = async (query) => {
  
  const options = {
    method: 'GET',
    url: 'http://api.weatherapi.com/v1/forecast.json',
    params: {
      q: query,
      days: '5'
    },
    headers: {
      'key': import.meta.env.VITE_API_KEY
    }
  }

  try {
    const response = await axios.request(options);
    loadingStatus.value++
    return response.data
  } catch (error) {
    console.error(error);
    // return 0
  }
};



export default getDataForecast

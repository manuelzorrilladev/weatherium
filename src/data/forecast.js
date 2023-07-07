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
      'key': 'fec070299a95457987b32950230507'
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

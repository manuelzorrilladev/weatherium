import axios from "axios";
const  getCitySearch = async (query) =>{
    const options = {
      method: 'GET',
      url: 'http://api.weatherapi.com/v1/search.json',
      params: {q: query},
      headers: {
        'key': import.meta.env.VITE_API_KEY
      }
    };
    
    try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error);
    }
    
}

export default getCitySearch



import axios from "axios";

const  getCitySearch = async (query) =>{
    const options = {
      method: 'GET',
      url: 'http://api.weatherapi.com/v1/search.json',
      params: {q: query},
      headers: {
        'key': 'fec070299a95457987b32950230507'
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



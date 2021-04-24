import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '64cf36f2a1707d14cf687c91b2d4e591';

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params:{
            q: query,
            unit: 'imperial',
            APPID: API_KEY,
        }
    });
    return data;
}
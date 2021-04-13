import axios from "axios";
import {toast} from "react-toastify";
import {apikey, baseUrl} from '../configs/apiDefinitions'

const getFiveDayWeather = async (cityKey) => {
    try {
        const data = await axios(`${baseUrl}forecasts/v1/daily/5day/${cityKey}?apikey=${apikey}&metric=${true}`);
        return data.data.DailyForecasts;
      } catch (err) {
        toast.error("Couldn't get forcast weather data: " + err.message);
      }
} 

export async function getCurrentWeather(cityKey) 
{
    try {
        const data = await axios(`${baseUrl}currentconditions/v1/${cityKey}?apikey=${apikey}&details=true`);
        return data.data;
      } catch (err) {
        toast.error("Couldn't get current weather data: " + err.message);
      }
} 

export async function getWeatherByCity(key, name)
{
    try {
      const fiveDays = await getFiveDayWeather(key);
      const currentWeather = await getCurrentWeather(key);
      const data = { fiveDays, key, name, currentWeather };
  
      return data
    } 
    catch (err) 
    {
        toast.error("Couldn't get weather information: " + err.message);
    };
};

const getUserLocationFromBrowser = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
          (data) => {
            resolve(data)
        }, 
            (err) => {
                reject(err)
        });
    })
};

export async function getUserGeoLocation() {
    try {
      const location = await getUserLocationFromBrowser();
      if (!location) 
        return;
      const data = await axios(`${baseUrl}locations/v1/cities/geoposition/search?apikey=${apikey}&q=${location.coords.latitude},${location.coords.longitude}`);
      
      return data.data;
    } catch (err) {
        toast.error("Couldn't get user position: " + err.message);
    }
  };


  export async function autocomplete(locationKey) {
    try {
      const data = await axios(`${baseUrl}locations/v1/cities/autocomplete?apikey=${apikey}&q=${locationKey}`);
      return data.data;
    } 
    catch (err) 
    {
        toast.error("Couldn't get autocomplete data: " + err.message);
    }
  }
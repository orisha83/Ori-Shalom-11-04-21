import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from "react-redux";
import FavoritesItemComp from './FavoritesItemComp';
import {useHistory} from 'react-router-dom'
import routes from '../configs/routes'
import {getWeatherByCity} from '../outerApiCalls/weatherServices';


const FavoritesComp = () => {
    const { favorites } = useSelector((state) => state.favoritesReducer);
    const history = useHistory()
    const dispatch = useDispatch(); 

    const loadCity = async (cityData) => {
        const weatherData = await getWeatherByCity(cityData.key, cityData.name)
        dispatch({type:'LOAD_WEATHER_DATA',payload:weatherData});
        history.push(routes.home);
      };



    return (
        <div>
            <Grid item container direction="row" justify="center" alignItems="center" spacing={2}>
                {favorites && favorites.map((item,index) => {
                    return <FavoritesItemComp key={index} cityData={item} callbackFunc={data => loadCity(data)}/>
                    }
                )}
            </Grid>
        </div>
    )
}

export default FavoritesComp;
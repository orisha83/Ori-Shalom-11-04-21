import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import SearchBarComp from './SearchBarComp'
import Grid from '@material-ui/core/Grid';
import ForcastComp from './forcastComp'
import FavoritesButtonComp from './favoritesButtonComp'

const HomeComp = () => {
    const {name, currentWeather, key} = useSelector((state) => state.forcastReducer);

    return (
        <Container textAlign="center"> 
            <Grid container direction="column" alignItems="center" spacing={5}>
                <Grid item xs> 
                    <SearchBarComp />
                </Grid>
                {currentWeather &&
                    <Grid item container direction="row" justify="space-around" alignItems="center">
                        <Grid item>
                                <h2>{name}</h2>
                                <h3>{currentWeather[0]?.Temperature.Metric.Value.toFixed(0) + "°C"}</h3>
                                <img width="40" height="50" src={`https://www.accuweather.com/images/weathericons//${currentWeather[0]?.WeatherIcon}.svg`}/>
                                <h3>{currentWeather[0]?.WeatherText}</h3>
                        </Grid>
                        <Grid item>
                             <FavoritesButtonComp keyProp={key}/>
                        </Grid>
                    </Grid>
                }
                <ForcastComp />
            </Grid>  
        </Container>
    )
}



export default HomeComp;
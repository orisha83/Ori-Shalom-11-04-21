import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {getCurrentWeather} from '../outerApiCalls/weatherServices';
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import FavoritesButtonComp from './favoritesButtonComp'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap','& > *': {
        margin: theme.spacing(6),
      },
    },
  }));

const FavoritesItemComp = (props) => {
    console.log("FavoritesItemComp")
    const classes = useStyles();
    const [cityData, setCityData] = useState()

    useEffect(() => {
        const weatherData = async () => {
            const data = await getCurrentWeather(props.cityData.key)
            setCityData(data)
        };
        weatherData();

    },[])

    return (
            <Grid item xs={3} >
                {cityData &&
                <Paper className={classes.root} elevation={13} onClick={() => props.callbackFunc({key : props.cityData.key, name : props.cityData.name})}>
                    <Grid container  direction="column"  justify="center"  alignItems="center"> 
                        <Grid item>
                            <h2>{props.cityData.name}</h2>
                        </Grid>
                        <Grid item>
                            <h3>{cityData[0]?.Temperature.Metric.Value.toFixed(0) + "°C"}</h3>
                        </Grid>
                        <Grid item>
                            <img width="40" height="50" src={`https://www.accuweather.com/images/weathericons//${cityData[0]?.WeatherIcon}.svg`}/>
                        </Grid>
                        <Grid item>
                            <h5>{cityData[0]?.WeatherText}</h5>
                        </Grid>
                        <Grid item>
                            <FavoritesButtonComp keyProp={props.cityData.key}/>
                        </Grid>
                    </Grid>
                </Paper>}
            </Grid>
    )
}

export default FavoritesItemComp;
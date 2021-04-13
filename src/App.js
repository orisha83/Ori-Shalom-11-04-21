import React, { useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect,} from "react-router-dom";
import routes from './configs/routes'
import FavoritesComp from './components/FavoritesComp'
import HomeComp from './components/HomeComp'
import HeaderComp from './components/HeaderComp'
import { useDispatch } from "react-redux";
import {getUserGeoLocation, getWeatherByCity} from './outerApiCalls/weatherServices'
import {ToastContainer, toast} from "react-toastify";

function App() {

  const dispatch = useDispatch();  

  useEffect(() => {
    console.log("useEffect - dispatch")
    const getUserWeather = async () =>  {
      try{
        const userLocationData = await getUserGeoLocation();
        if(userLocationData) 
        {
          const weatherData = await getWeatherByCity(userLocationData.Key, userLocationData.LocalizedName)
          dispatch({type:'LOAD_WEATHER_DATA',payload:weatherData});
        }
        else
        {
          const weatherData = await getWeatherByCity(215854, "Tel Aviv")
          dispatch({type:'LOAD_WEATHER_DATA',payload:weatherData});
        }
      }
      catch (err) {
        toast.error("Can't set initial Location " + err.message);
      }
    };
    getUserWeather();
  },[dispatch]);




  return (
    <Router>
    <div className="App">
      <HeaderComp />
      <Switch>
        <Route path={routes.favorites} component={FavoritesComp}></Route>
        <Route exact path={routes.home} component={HomeComp}></Route>
        <Redirect to="/" />
      </Switch>
      <ToastContainer />
    </div>
    </Router>
  );
}

export default App;

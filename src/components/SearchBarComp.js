import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {autocomplete} from '../outerApiCalls/weatherServices'
import {getWeatherByCity} from '../outerApiCalls/weatherServices';
import './SearchBar.css';

function SearchBarComp() {
  const dispatch = useDispatch();

  const [cityOptions, setCityOptions] = useState([]);
  const [value, setValue] = useState("");
  const [ selectedOption, setSelectedOption ] = useState( false );

  useEffect( async () => {
    if(value != "")
    {
        const suggestions = await autocomplete(value);
        setCityOptions(suggestions)
        setSelectedOption(true)
    }
    else{
        setSelectedOption(false)
    }
    
}, [ value ]);

const selectSuggesstion = async (data) => {
    const weatherData = await getWeatherByCity(cityOptions[data].Key, cityOptions[data].LocalizedName)
    dispatch({type:'LOAD_WEATHER_DATA',payload:weatherData});
    setSelectedOption( false ); 
    setValue("")  
  };

  return (
        <form onSubmit={ e => e.preventDefault() }>

        <input value={ value } 
            className="auto-complete-input"
            type="text"
            placeholder="Search for city..."
            onChange={ e => setValue( e.target.value ) }/>

    {selectedOption &&
        <div className="auto-complete-suggestions">
            <ul >
                {
                    cityOptions && cityOptions.map(( item, index ) => {;
                        return (
                            <li key={item.Key} onClick={() => selectSuggesstion( index )}>{ item.LocalizedName }</li>
                        )
                    })
                }
            </ul>
        </div>}
        </form>
  )
}

export default SearchBarComp;

const initState = {
    fiveDays:[], 
    key:"", 
    name:"", 
    currentWeather:[]
}

const forcastReducer = (state = initState, {type, payload}) =>
{
    switch(type)
    {
        case 'LOAD_WEATHER_DATA':
            return {
                fiveDays: payload.fiveDays,
                key: payload.key,
                name: payload.name,
                currentWeather: payload.currentWeather,
            };

        default:
            return state;
    }
}

export default forcastReducer;
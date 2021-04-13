import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FavoritesButtonComp = (props) => {

    const dispatch = useDispatch();

    const { favorites } = useSelector((state) => state.favoritesReducer);
    const { key, name } = useSelector((state) => state.forcastReducer);
    const [city,setCity] = useState({})

    const isFavorite = favorites.some(x => x.key == props.keyProp)

    const favoriteClicked = () =>
    {
        if(isFavorite)
        {
            dispatch({type:"REMOVE_FROM_FAVORITES", payload : city})
        }
        else
        {
            dispatch({type:"ADD_TO_FAVORITES", payload : city})
        }       
    }

    useEffect(() =>
    {   
        setCity({key :key, name : name})
    },[key])

    return (
        <div>
            {isFavorite ? 
            <Button color="inherit"><FavoriteIcon style={{ fontSize: 50 }} onClick={favoriteClicked}/></Button>
            :
            <Button color="inherit"><FavoriteBorderIcon style={{ fontSize: 50 }} onClick={favoriteClicked}/></Button>}
        </div>
    )
}

export default FavoritesButtonComp;

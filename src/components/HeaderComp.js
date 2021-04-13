import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

const HeaderComp = () => {

    const classes = useStyles();

    return (
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Weather App
              </Typography>
              <Link to={`/`} style={{ color: "inherit" }}><Button color="inherit"><HomeIcon /></Button></Link>
              <Link to={`/favorites`} style={{ color: "inherit" }}><Button color="inherit"><FavoriteIcon /></Button></Link>
            </Toolbar>
          </AppBar>
      );
}



export default HeaderComp;
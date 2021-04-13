import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap','& > *': {
        margin: theme.spacing(6),
      },
    },
  }));

const ForcastComp = () => {
    const classes = useStyles();
    const {fiveDays} = useSelector((state) => state.forcastReducer);

    const weekDaysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const getDayNameFromDate = (date) => {
        const Day = new Date(date).getDay();
        return weekDaysArray[Day];
      };

    return (
        <Grid item container direction="row" justify="center" alignItems="center" spacing={2}>
            {fiveDays.map((dayItem,index) => {
                return  <Grid item xs key={index}>
                            <Paper className={classes.root} elevation={13}>
                            <Grid container  direction="column"  justify="center"  alignItems="center"> 
                                <Grid item>
                                    <h4>{getDayNameFromDate(dayItem.Date)}</h4>
                                </Grid>
                                <Grid item> 
                                    <h5>{dayItem.Day.IconPhrase}</h5>
                                </Grid>
                                <Grid item container direction="row" justify="center" alignItems="center" spacing={2}>
                                    <Grid item>
                                        <Grid container  direction="column"  justify="center"  alignItems="center">
                                            <Grid item>
                                                {dayItem.Temperature.Maximum.Value.toFixed(0) + "°C"}
                                            </Grid>
                                            <Grid item>
                                                <img width="30" height="40" src={`https://www.accuweather.com/images/weathericons/${dayItem.Day.Icon}.svg`} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container  direction="column"  justify="center"  alignItems="center">
                                            <Grid item>
                                                {dayItem.Temperature.Minimum.Value.toFixed(0) + "°C"}
                                            </Grid>
                                            <Grid item>
                                                <img width="30" height="40" src={`https://www.accuweather.com/images/weathericons/${dayItem.Night.Icon}.svg`} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            </Paper>
                        </Grid>
            })}

        </Grid>
    )
};

export default ForcastComp;
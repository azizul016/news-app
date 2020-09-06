import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './News.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textTransform: 'capitalize'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    color: 'black'
  },
  pos: {
    marginBottom: 12,
  },
});

const News = (props) => {
    const {title, id, body} = props.news;
    const history = useHistory();
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    
    function handleClick(newsId) {
        history.push(`/news/${newsId}`);
    }

    return (
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <Box display="flex" flexDirection="column" flexWrap="wrap" justifyContent="flex-center"  boxShadow={3} spacing={3}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <h3>{title.slice(0, 20)}</h3>
                </Typography>
                <Typography variant="body2" component="p">
                    <p>{body.slice(0, 60)} ...</p>
                </Typography>
                </CardContent>
                <CardActions>
                    <Button  variant="contained" onClick={() => handleClick(id)}>Show Details</Button>
                </CardActions>
            </Card>
          </Box> 
        </Paper>
      </Grid>
     
    );
};

export default News;
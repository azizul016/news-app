import React, { useState, useEffect } from 'react';
import './Home.css'
import News from '../News/News';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
    const [news, setNews] = useState([])
    const classes = useStyles();

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(res => res.json())
        .then(data =>  setNews(data))
    },[])
    
    return (
        <Container  className={classes.root}>
            <Grid container spacing={3}>
                {
                    news.map(news => <News key={news.id} news={news}></News>)
                }
            </Grid>
        </Container>
    );
};

export default Home;
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import NewsDetail from './component/NewsDetail/NewsDetail';
import Details from './component/Details/Details';

function App() {
  return (
    <Router>
    <Header></Header>
      <Switch>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/news/:newsId">
          <NewsDetail />
        </Route>
        <Route path='/details'>
          <Details />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

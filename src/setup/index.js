import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//pages
import About from './About'
import CurrentWeatherData from './CurrentWeatherData'
import WeeklyWeather from './WeeklyWeather'
import HourlyWeather from './HourlyWeather'

import Error from './Error'
//navbar
import NavbarPage from './NavbarPage'

const ReactRouter = () => {
  return <Router>
    <NavbarPage />
    <Switch>
      <Route exact path='/'>
        <CurrentWeatherData />
      </Route>
      <Route path='/hourly'>
        <HourlyWeather />
      </Route>
      <Route path='/weekly'>
        <WeeklyWeather />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='*'>
        <Error />
      </Route>
    </Switch>  
  </Router>
}

export default ReactRouter
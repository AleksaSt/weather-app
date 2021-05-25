import React, {useState} from 'react'
import { Card } from 'react-bootstrap'
import indexCSS from './index.module.css'


const api = {
  key: 'c3512f3ec8bd5a8b7c26d9756efd841c',
  base: 'https://api.openweathermap.org/data/2.5/' 
}
const HourlyWeather = () => {

  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState('');
  const [hourly, setHourly] = useState([]);

  const search = evt => {
    if(evt.key === 'Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        fetch(`${api.base}onecall?lat=${result.coord.lat}&lon=${result.coord.lon}&appid=${api.key}`)
        .then(res => res.json())
        .then(resultDaily => {
          setWeather(resultDaily)
          resultDaily.hourly.length = 24
          setHourlyFiltered(resultDaily.hourly, 3)
        })
      })    
    }
  }

  
  const hourlyFiltered = (hourly, nth) => {
    return hourly.filter((e, i) => i % nth === nth - 1);
  }

  const setHourlyFiltered = function(hourly, nth){
    let filteredHourly = hourlyFiltered(hourly, nth)
    setHourly(filteredHourly)
  }


  const getDayAndMonth = (weekDay) => {
    const unixTime = weekDay;
    const date = new Date(unixTime*1000);
    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()]
    let month = months[date.getMonth()]
    let currentDate = date.getDate()
    return `${day} ${currentDate}th ${month}`
  }

  const WeatherCard = () => {
    return <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Hourly Weather</Card.Title>
          {(typeof hourly != 'undefined') ? (
            <div>{hourly.map(hour => (
              <div>
                <div>Temperature: {Math.round(hour.temp - 273.15)}°C</div>
                <div>Pressure: {hour.pressure }hPa</div>
                <div>Humidity: {hour.humidity}%</div>
              </div>
            ))}</div>
          ) : ('')}
        </Card.Body>
    </Card>    
      </>
  }
  
  return (
    <>   
      <div>
        <input type="text" className="search" placeholder='Search...' onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/>
      </div>
     <div>
      {<WeatherCard/>}
     </div>
    </>
  );
}

export default HourlyWeather;



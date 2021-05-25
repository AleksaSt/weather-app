import React, {useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import './weekly.css'
import {IoSearch} from 'react-icons/io5'

const api = {
  key: 'c3512f3ec8bd5a8b7c26d9756efd841c',
  base: 'https://api.openweathermap.org/data/2.5/' 
}
const WeeklyWeather = () => {

  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState('');
  const [show, setShow] = useState(false);
  const [showResults, setShowResults] = useState(false)
  const [dayDt, setDayDt] = useState(0)
  // const [city, setCity] = useState({});

  const search = evt => {
    if(evt.key === 'Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        fetch(`${api.base}onecall?lat=${result.coord.lat}&lon=${result.coord.lon}&appid=${api.key}`)
        .then(res => res.json())
        .then(resultDaily => {
          console.log(resultDaily)
          setWeather(resultDaily)
          setShow(true)
          // console.log(weather)
        })
      })    
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()
  
    return `${day}, ${date}th ${month}, ${year}`
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

  const showInfo = () => {
    setShowResults(!showResults)
    // setDayDt(index)
  }

  const WeatherCard = () => {
    return <>
     <Card className='weatherCard-weekly'>
      <Card.Body>
        <Card.Title className='weatherCard-main-title'>Today</Card.Title>
          {(typeof weather.daily != 'undefined') ? (
            <div>
              <div>{weather.daily.map((day, index) => (     
                <div>
                  <div>{getDayAndMonth(day.dt)}</div>
                  <div>
                    {day.weather.map(info =>{
                      return (
                        <div>
                          <img className="weatherIcon-weekly" src={"http://openweathermap.org/img/wn/" + info.icon + ".png"} alt="No Icon Available"/>
                          <p>{info.description}</p>
                        </div>
                      )
                    })}
                  </div>   
                  <div><p>Temperature: {Math.round(day.temp.day - 273.15)}°C</p></div>
                  <div><p>Max: {Math.round(day.temp.max - 273.15)}°C</p></div>                 
                  <div><p>Min: {Math.round(day.temp.min - 273.15)}°C</p></div>                    
                  <Button onClick={showInfo} variant="outline-light">More Details</Button>{' '}  
                  {showResults ? 
                  <div key={day.dt}>
                    <div>
                      <p>Feels Like: {Math.round(day.feels_like.day - 273.15)}°C</p>    
                    </div>
                    <div>
                      <p>Humidity: {day.humidity}%</p> 
                    </div>
                    <div>
                      <p>Pressure: {day.pressure}hPa</p>   
                    </div>
                    <div>
                      <p>Wind Direction: {day.wind_deg}°</p>      
                    </div>
                    <div>
                      <p>Wind Speed: {day.wind_speed}m/s</p>    
                    </div>
                  </div>
                  : null}
                </div>  
              ))}</div>
            </div>
          ) : ('')}
        </Card.Body>
    </Card>    
      </>
  }

  {/* <div>{getDayAndMonth(hour.dt)}</div> */}
  
  return (
    <>   
      <div>
        <input type="text" className="search" placeholder=" Search city..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/>
      </div>
      <IoSearch size="30px" style={{color: "#6495ED", position: "relative", left: "305px", top:"-30px"}} />
      <div className='dateBuilder-weekly'>
        {dateBuilder(new Date())}
      </div>
     <div>
      {show && <WeatherCard />}
     </div>
    </>
  );
}

export default WeeklyWeather;

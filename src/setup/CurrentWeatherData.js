import React, {useState, useEffect} from 'react'
import { Card, Spinner} from 'react-bootstrap'
import { Modal, Button } from 'react-bootstrap'
import {IoSearch} from 'react-icons/io5'
import {FaTemperatureHigh} from 'react-icons/fa'
import {WiHumidity} from 'react-icons/wi'
import {FiWind} from 'react-icons/fi'
import {MdVisibility} from 'react-icons/md'
import {GiWindsock} from 'react-icons/gi'
import {WiBarometer} from 'react-icons/wi'
import Home from './Home'
import indexCSS from './index.module.css'

const api = {
  key: 'c3512f3ec8bd5a8b7c26d9756efd841c',
  base: 'https://api.openweathermap.org/data/2.5/' 
}

const CurrentWeatherData = () => {

  const [weather, setWeather] = useState({})
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)


  const search = evt => { 
    if(evt.key === 'Enter'){
      setLoading(true)
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => {
        if(!res.ok){
          throw Error('Unexpected Error')
        }
        return res.json()
      })
      .then(result => { 
        console.log(result)
        setWeather(result)
        setQuery('')
        setShow(true)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message);
      })      
    }  
  }

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1000)
  // }, [])
 

  function Example() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Unexpected Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>Location does not exist</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose} onClick={() => window.location.reload(false)}>
              close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
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
  const WeatherCard = () => {
    return <>
    <Card className={indexCSS.weatherCard}>              
      <Card.Body>
        <Card.Title></Card.Title>
          {(typeof weather.main != 'undefined') ? (
            <div className={indexCSS.weatherCardFont}>
              <h4>{weather.name}, {weather.sys.country}</h4>
              <h3 className={indexCSS.weatherMain}>{Math.round(weather.main.temp)}°C</h3>
              <div className={indexCSS.minMaxTemperature}>
                <p>{Math.round(weather.main.temp_max)}°C</p>
                <p>{Math.round(weather.main.temp_min)}°C</p>
                <div className={indexCSS.line}></div>
              </div>
              <p>{weather.weather.map(element => {
                return (
                  <div>
                    <img className={indexCSS.weatherIcon} src={"http://openweathermap.org/img/wn/" + element.icon + ".png"} alt="No Icon Available"/>
                    <p className={indexCSS.weatherDescription}>{element.description}</p>
                  </div>
                ) 
                })}
              </p>
              {show && <div className={indexCSS.detailsContainer}>
                <div className={indexCSS.details}>
                  <p>Details</p>
                  <div className={indexCSS.lineTwo}></div>
                </div>
                <div className={indexCSS.detailsWeather}>
                  <div>
                    <FaTemperatureHigh />
                    <p>Feels Like: {weather.main.feels_like}°C</p>
                  </div>
                  <div>
                    <FiWind />
                    <p>Wind Speed: {weather.wind.speed}m/s</p>
                  </div>
                  <div>
                    <GiWindsock />
                    <p>Wind Direction: {weather.wind.deg}°</p>
                  </div>
                  <div>
                    <WiHumidity size="30px"/>
                    <p>Humidity: {weather.main.humidity}%</p>
                  </div>
                  <div>
                    <WiBarometer size="30px"/>
                    <p>Pressure: {weather.main.pressure}hPa</p>
                  </div>
                  <div>
                    <MdVisibility />
                    <p>Visibility: {weather.visibility} m</p>
                  </div>
                </div>
              </div>}
            </div>
            ) : ('')}
        </Card.Body>
    </Card>
    </>
  }

  return (
    <> 
      {error && <Example />}
      <input type="text" placeholder=" Search city..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/>
      <IoSearch size="30px" style={{color: "#6495ED", marginBottom: "2px", marginLeft: "-35px"}} />
      <div className={indexCSS.dateBuilder}>
        {dateBuilder(new Date())}
      </div>
      {loading ? <Spinner animation="border" variant="primary" className={indexCSS.spinner} /> : null  }
      {show && <WeatherCard />}
      {show || <Home />}
    </>
  );
}

export default CurrentWeatherData;



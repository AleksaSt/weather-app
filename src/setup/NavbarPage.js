import React from  'react';
import {Link} from 'react-router-dom'
import { Navbar, Nav,  NavDropdown } from 'react-bootstrap'
import {TiWeatherCloudy} from 'react-icons/ti'
import navbarCSS from './navbar.module.css'

const NavbarPage = () => {
  return (
    <>
     <div className="navbar-main">
     <Navbar bg="light" expand="lg" fixed="top">
        <div className={navbarCSS.navbarIcon}>
          <TiWeatherCloudy size="40px" className={navbarCSS.cloudIcon} />
        </div>
        <Link to="/"><img width="47" height="47" className={navbarCSS.logo} src="https://images-na.ssl-images-amazon.com/images/I/81%2BeUvsHXoL.png" alt="No Logo Available"/></Link>
        <Navbar.Brand href="/" className={navbarCSS.mainNavbarWeather}>WeatherApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="More Weather Options" id="basic-nav-dropdown">
                <NavDropdown.Item href="/weekly">7 Day Forecast</NavDropdown.Item>
                <NavDropdown.Item href="/hourly">Hourly Forecast</NavDropdown.Item>
                <NavDropdown.Item href="/minutely">Minutely Forecast</NavDropdown.Item>
                <NavDropdown.Item href="/historical">Historical data for 5 previous days</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item  href="/about">About</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
     </Navbar>
   </div>    
  </>
  )  
}


export default NavbarPage;
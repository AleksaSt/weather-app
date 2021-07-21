import React from  'react';
import {IoLogoFacebook} from 'react-icons/io'
import {FiTwitter} from 'react-icons/fi'
import {ImYoutube2} from 'react-icons/im'
import {AiFillLinkedin} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import Image from './assets/openweather-icon.png'
import Image2 from './assets/google-play.png'
import Image3 from './assets/app-store.png'
import aboutCSS from './about.module.css'

function ReturnSection() {
  
  return (
      <footer className={aboutCSS.footerContainer}>
        <div className={aboutCSS.footerDiv}>
          <div className={aboutCSS.greyLineTwo}></div>
          <b className={aboutCSS.weatherAppText}>Connect With Us</b>
          <div id="sm" className={aboutCSS.footerSocialMedia}>
            <a href="https://www.facebook.com/" className={aboutCSS.smFacebook}>
              <IoLogoFacebook size="30px" />
            </a>
            <a href="https://twitter.com/" className={aboutCSS.smTwitter}>
              <FiTwitter size="30px" />
            </a>
            <a href="https://www.youtube.com/" className={aboutCSS.smYoutube}> 
              <ImYoutube2 size="30px" />
            </a>
            <a href="https://www.instagram.com/" className={aboutCSS.smInstagram}>
              <GrInstagram size="30px" /> 
            </a>
            <a href="https://www.linkedin.com/" className={aboutCSS.smLinkedin}>
              <AiFillLinkedin size="30px" /> 
            </a>
          </div>
          <div className={aboutCSS.footerLinks}>
            <a href="https://en.wikipedia.org/wiki/Privacy_policy"><b>Privacy Policy</b></a>
            <p className={aboutCSS.footerLinksOne}>|</p>
            <a className={aboutCSS.footerLinksTwo} href="https://en.wikipedia.org/wiki/Terms_of_service"><b>Terms Of Service</b></a>
            <p className={aboutCSS.footerLinksOne}>|</p>
            <a href="https://en.wikipedia.org/wiki/FAQ"><b>FAQ</b></a>
          </div>
          <p className={aboutCSS.weatherAppTextTwo}>Thank you for using WeatherApp!</p>
          <a href="https://openweathermap.org/" className={aboutCSS.weatherAppTextThree}>Powered By OpenWeather</a>
          <a href="https://openweathermap.org/"><img src={Image} className={aboutCSS.weatherImage}  alt="No Image Available"/></a>
          <div className={aboutCSS.greyLine}></div>
          <p className={aboutCSS.weatherAppTextFour}>© 2021 WeatherApp, Inc. "WeatherApp" and sun design are registered trademarks of WeatherApp, Inc.</p>
          <div className={aboutCSS.appImages}>
            <a href="https://play.google.com/store/apps"><img src={Image2} className={aboutCSS.appImage} alt="No Image Available"/></a>
            <a href="https://play.google.com/store/apps"><img src={Image3} className={aboutCSS.appImage} alt="No Image Available"/></a>
          </div>
        </div>
      </footer> 
  )
}

export default ReturnSection;
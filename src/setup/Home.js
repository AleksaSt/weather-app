import React from  'react';
import homeCSS from './home.module.css'

const Home = () => {
  return (
    <div id="an" className={homeCSS.weatherAnimationsMain} style={{overflowY: "hidden", overflowX: "hidden"}}>
      <div className={homeCSS.animationOne}>
        <p>Search your home town or country!</p>
      </div>
      <div id="an" className={homeCSS.animationTwo}>
        <p>Over 10 million locations around the world!</p>
      </div>
      <div id="an" className={homeCSS.animationThree}>
        <p>Including hourly weather and weather for the whole week!</p>
      </div>
    </div>
  )
}

export default Home;
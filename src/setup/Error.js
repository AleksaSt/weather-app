import React from  'react';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import errorCSS from './error.module.css'
import Image4 from './assets/404-not-found.png'

const Error = () => {

  return (
    <body id="bodyId">
      <div className={errorCSS.errorDiv} >
        <img src={Image4} className={errorCSS.errorImage} alt="No Image Available"/>  
        <h1 className={errorCSS.title}>Whoops!</h1>
        <p>The page you were looking for does not exist! Click on the button to return to the Home Page</p>
        <Link to='/'>
          <Button className={errorCSS.btn} variant="primary">Go Back To Home</Button>{' '}
        </Link>        
      </div> 
    </body>
        
  )
}

export default Error;
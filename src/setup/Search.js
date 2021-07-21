import React, {useState, useEffect} from 'react'
import indexCSS from './index.module.css'

const api = {
  key: 'c3512f3ec8bd5a8b7c26d9756efd841c',
  base: 'https://api.openweathermap.org/data/2.5/' 
}

const Search = (props) => {
  const [query, setQuery] = useState('')  

  const passSearchTerm = (evt) => {
    if(evt.key == "Enter") {
      props.onSearch(query)
    }
  } 

  return (
    <>
      <div className={indexCSS.inputContainer}>
        <input type="text" placeholder=" Search city..." value={query} onChange={e => setQuery(e.target.value)} onKeyPress={passSearchTerm}/>
      </div>
    </>
  )
}

export default Search

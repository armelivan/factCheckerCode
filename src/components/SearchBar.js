import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react"
const SearchBar = () => {
  
  const  [theUrl, setUrl] = useState('')
  
  const clickHandler =(e) =>{
    /*const source = document.querySelector('input')*/
    e.preventDefault();
    console.log('ok')
    const url = {theUrl} /*recupere la donnée sous l'action du click*/
    /*console.log(url)*/
  }
  return (
    <div className='SearchBar'>
      <input type='text' value={theUrl} onChange={(e)=> setUrl(e.target.value)} placeholder='https://...'/>
      <span className='clickableAwesomeFont' onClick={clickHandler} ><FontAwesomeIcon icon={faSearch} className='s-icon' size={20}/> </span>
    </div>
    
  )
}

export default SearchBar

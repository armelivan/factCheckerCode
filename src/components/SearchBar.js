import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className='SearchBar'>
      <input type='text' placeholder='https://...'/>
      <FontAwesomeIcon icon={faSearch} className='s-icon' size={20}/>
    </div>
  )
}

export default SearchBar

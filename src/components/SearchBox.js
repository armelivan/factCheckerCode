import SearchBar from '../components/SearchBar'
import Message from './Message'
import {useState} from "react"
const SearchBox = () => {
  const  [text, setText] = useState("Please enter a value");
  return (
    <div className='SearchBox'>
      <Message text={text}/>
      <SearchBar changeText= {text =>setText(text)}/>
    </div>
  )
}

export default SearchBox

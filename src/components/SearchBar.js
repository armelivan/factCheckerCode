import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react"
const SearchBar = (props) => {
  
  const  [theUrl, setUrl] = useState('');
  let localData ='ii';

  const renderPorsts = async() =>{
    console.log('in');
    let uri='http://localhost:8000/post';
    const res = await fetch(uri); // response object 
	  const posts = await res.json();// data in json format 
    localData =posts;
    console.log(posts)
  }

  const clickHandler =(e) =>{
    /*const source = document.querySelector('input')*/
    e.preventDefault();
    const url = {theUrl} /*recupere la donnée sous l'action du click*/
   /* Action sur l'URL*/
   /*window.addEventListener('DOMcontentLoaded',()=>renderPorsts());*/
   fetch('http://localhost:8000/post')
    .then(res=> res.json())
    .then(data => {
      const value = responseQuery(url.theUrl,data);
      let returnStr = value["message"];
      if (value["id"]==5) {
        returnStr= returnStr+ '\n,' + " score: "+ value["score"].toString();
      }
      props.changeText(returnStr); /* agis sur le parent pour mettre a jour les valeurs*/
    }) /* Execute la fonction directement sur le parent*/

  }

  

  const responseQuery = (st,db) =>{
  
    if(st===''){
      return db[0];
    }else if (st==='type1'){
      return db[1];
    }else if (st==='type2.1'){
      return db[2];
    }else if (st==='type2.2'){
      return db[3];
    }else if (st==='type2.3'){
     return db[4];
    }else{
      return db[5];
    }
  }

 

  return (
    <div className='SearchBar'>
      <input type='text' value={theUrl} onChange={(e)=> setUrl(e.target.value)} placeholder='https://...'/>
      <span className='clickableAwesomeFont' onClick={clickHandler} ><FontAwesomeIcon icon={faSearch} className='s-icon' size={20}/> </span>
    </div>
    
  )
}

export default SearchBar

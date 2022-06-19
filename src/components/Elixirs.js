import React,{useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import ElixirDisplay from './ElixirDisplay';

const Elixirs = () => {
  //fetch data from API
    const [elixirs, setElixirs] = useState([])
    const fetchQuote = async() =>{
        return await fetch('https://wizard-world-api.herokuapp.com/Elixirs')
        .then(response => response.json());
      }
       
    useEffect(() => {
      async function fetchData(){
        setElixirs(await fetchQuote());
      }
     fetchData();
     
    }, [])
      const elixirList =  elixirs.map(inner => [inner].map((elixirs) =>
      <ElixirDisplay key={uuidv4()} elixirs={elixirs}/>
      
      ));
  
  return (
    <div>
    <div>Elixirs</div>
    <div>{(elixirList.length >= 1 ? <div>{elixirList}</div>: <div>Loading....</div>)}</div>
    </div>

  )
}

export default Elixirs
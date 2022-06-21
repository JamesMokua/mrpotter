import React,{useState,useEffect} from 'react'


const Elixirs = () => {
  const[elixirs,setElixirs] = useState(null);
  const[loading,setLoading] = useState(true)
  const[error,setError] = useState(null)
  // fetch data using async await
  const getData =  async() => {
    //fetches data and sets it to the state
    try{
      const response = await fetch('https://wizard-world-api.herokuapp.com/Elixirs');
      if(!response.ok){
        throw new Error(
          `This is an HTTP Error: The status is ${response.status}`
        );
      }
      let elixirs = await response.json();
      setElixirs(elixirs);
      setError(null);
    } catch(err){
      //catches error in case of network failure
      setError(err.message);
      setElixirs(null);
    } finally {
      //sets loading to false and displays fetched data
      setLoading(false);
    }
  }
  useEffect(() => {
   getData()
  },[])
  
  return (
    <div>
    <div>Elixirs</div>
    {/*manage loading and display error message*/}
      {loading && <div>A moment please...</div>}
      {error && (
        <div> { `There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
      {/*map through the fetched data,destructure it and display it*/}
      {/*if else to show not available if data not included in fetched data*/}
        {
          elixirs &&
          elixirs.map(({id,name,effect,sideEffects,characteristics,time,difficulty,ingredients,inventors,manufacturer}) => (
            <li key={id}>
              <div><b>Name:</b>{(name != null ? <div> {name} </div> : <div>Not Available</div> )}</div> 
        <div><b>Effect:</b>{(effect != null ? <div> {effect} </div> : <div>Not Available</div> )}</div> 
        <div><b>Side Effect:</b>{(sideEffects != null ? <div> {sideEffects} </div> : <div>Not Available</div> )}</div>  
        <div><b>Characteristics:</b>{(characteristics != null ? <div> {characteristics} </div> : <div>Not Available</div> )}</div>    
        <div><b>Time:</b>{(time != null ? <div> {time} </div> : <div>Not Available</div> )}</div>   
        <div><b>Difficulty:</b>{(difficulty != null ? <div> {difficulty} </div> : <div>Not Available</div> )} </div>           
        {/*map through ingredients and inventors and display data inside*/}
        <div><b>Ingredients:</b> {(ingredients.length >= 1 ? <>{ingredients.map(({name}) => (
        <ul>
          <li>{name}</li>
        </ul>
        ))}</>: <div>Not Available</div>)}</div> 
        <div><b>Inventors:</b> {(inventors.length >= 1 ? <>{inventors.map(({firstName,lastName}) => (
          <div>{firstName +  lastName}</div>
        ))}</>: <div>Not Available</div>)}</div> 
        <div><b>Manufacturers: </b>{(manufacturer != null ? <div> {manufacturer} </div> : <div>Not Available</div> )}</div> 
              <hr/>
            </li>
          ))
        }
      </ul>
    </div>

  )
}

export default Elixirs
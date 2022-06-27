import React,{useState,useEffect} from 'react'

const Wizards = () => {
    const[wizards,setWizards] = useState(null);
    const[error,setError] = useState(null);
    const[loading,setLoading] = useState(null)

    const getData = async() => {
        try{
            const response = await fetch('https://wizard-world-api.herokuapp.com/Wizards');
            if(!response.ok){
                throw new Error(
                  `This is an HTTP Error: The status is ${response.status}`
                );
              }
              let wizards = await response.json();
              setWizards(wizards)
              setError(null)
        }catch(err){
            setError(err.message);
            setWizards(null)
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
    getData()
    },[])
  return (
    <>
      {/*manage loading and display error message*/}
      {loading && <div>A moment please...</div>}
    {error && (
        <div> { `There is a problem fetching the post data - ${error}`}</div>
      )}
       {/*map through the fetched data,destructure it and display it*/}
      {/*if else to show not available if data not included in fetched data*/}
      {wizards && 
      wizards.map(({elixirs,id,firstName,lastName}) => (
        <div key={id}>
       <div><b>Elixirs:</b> {elixirs.map(({id,name}) => (
            <ul key={id}>
                <li>{name}</li>
            </ul>
        ))}</div>
        <div><b>Name:</b> {firstName+' '+ lastName}</div>
        <hr/>
        </div>
      ))
      }
    </>
   
  )
}

export default Wizards
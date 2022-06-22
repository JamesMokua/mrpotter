import React,{useState,useEffect} from 'react'

const Houses = () => {
    const[error,setError] = useState(null)
    const[houses,setHouses] = useState(null)
    const[loading,setLoading] = useState(true)

    const getData = async() => {
        try{
            const response = await fetch('https://wizard-world-api.herokuapp.com/Houses');
            if(!response.ok){
                throw new Error(
                  `This is an HTTP Error: The status is ${response.status}`
                );
              }
              let houses = await response.json();
              setHouses(houses)
              setError(null)

        }catch(err){
            setError(err.message);
             setHouses(null);
        } finally {
            setLoading(false);
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
      {houses &&
      houses.map(({id,name,houseColours,founder,animal,element,ghost,commonRoom,heads,traits}) => (
        <div key={id}>
            <div><b>Name:</b> {name}</div>
            <div><b>House colours:</b> {houseColours}</div>
            <div><b>Founder:</b> {founder}</div>
            <div><b>Animal:</b> {animal}</div>
            <div><b>Element:</b> {element}</div>
            <div><b>Ghost:</b>{ghost}</div>
            <div><b>Common room:</b>{commonRoom}</div>
            <div><b>Heads:</b> {(heads.length >= 1 ? <>{heads.map(({id,firstName,lastName}) => (
          <div key={id}>{firstName +' ' + lastName}</div>
        ))}</>: <div>Not Available</div>)}</div> 
            <div><b>Traits:</b> {(traits.length >= 1 ? <>{traits.map(({id,name}) => (
                <ul>
                    <li>{name}</li>
                </ul>
        ))}</>: <div>Not Available</div>)}</div> 
        <hr/>
        </div>
      ))
      }
    </>
  )
}

export default Houses
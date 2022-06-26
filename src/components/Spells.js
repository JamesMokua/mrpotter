import React,{useState,useEffect} from 'react'

const Spells = () => {
    const[spells,setSpells] =useState(null)
    const[error,setError] = useState(null)
    const[loading,setLoading] = useState(true)

    const getData = async() => {
        try{
            const response =  await fetch('https://wizard-world-api.herokuapp.com/Spells');
            if(!response.ok){
                throw new Error(
                  `This is an HTTP Error: The status is ${response.status}`
                );
              }
              let spells = await response.json();
              setSpells(spells)
              setError(null)

        }catch(err){
            setError(err.message)
            setSpells(null);
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
      {spells && 
      spells.map(({id,name,incantation,effect,canBeVerbal,type,light,creator}) => (
            <div key={id}>
                 <div><b>Name:</b> {name}</div>
            <div><b>Incantation:</b> {incantation}</div>
            <div><b>Effect:</b> {effect}</div>
            <div><b>Can be verbal:</b>{(canBeVerbal != null ? <div> {canBeVerbal ? "True" : "False"} </div> : <div>Not Available</div> )} </div>
            <div><b>Type:</b> {type}</div>
            <div><b>Light:</b>{light}</div>
            <div><b>Creator:</b>{(creator != null ? <div> {creator} </div> : <div>Not Available</div> )} </div>
            <hr/>
            </div>
      ))
      }
     </>
  )
}

export default Spells
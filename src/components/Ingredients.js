import React,{useState,useEffect} from 'react'

const Ingredients = () => {
    const[ingredients, setIngredients] = useState(null);
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(true)
     
    const getData = async() => {
        try {
            const response = await fetch('https://wizard-world-api.herokuapp.com/ingredients');
            if(!response.ok){
                throw new Error(
                  `This is an HTTP Error: The status is ${response.status}`
                );
              }
              let ingredients = await response.json();
              setIngredients(ingredients)
              setError(null)
        } catch (err) {
            setError(err.message);
            setIngredients(null)
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
      {ingredients && 
      ingredients.map(({id,name}) => (
        <div> <b>Ingredient:</b> 
        <ul key={id}>
        <li>{name}</li>
    </ul>
    </div>
      ))}
   </>
  )
}

export default Ingredients
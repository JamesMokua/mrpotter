import React from 'react'

const ElixirDisplay = ({elixirs}) => {
  return (
    <>
     <div>Name:{(elixirs.name != null ? <div> {elixirs.name} </div> : <div>-</div> )}</div> 
        <div>Effect:{(elixirs.effect != null ? <div> {elixirs.effect} </div> : <div>-</div> )}</div> 
        <div>Side Effect:{(elixirs.sideEffects != null ? <div> {elixirs.sideEffects} </div> : <div>-</div> )}</div>  
        <div>Characteristics:{(elixirs.characteristics != null ? <div> {elixirs.characteristics} </div> : <div>-</div> )}</div>    
        <div>Time:{(elixirs.time != null ? <div> {elixirs.time} </div> : <div>-</div> )}</div>   
        <div>Difficulty:{(elixirs.difficulty != null ? <div> {elixirs.difficulty} </div> : <div>-</div> )} </div>
            
        
        <div>Ingredients: {(elixirs.ingredients.length >= 1 ? <div>{elixirs.ingredients.name}</div>: <div>Loading....</div>)}</div> 
        <div>Inventors:{elixirs.inventors.firstName}</div> 
        <div>Manufacturers:{(elixirs.manufacturers != null ? <div> {elixirs.manufacturers} </div> : <div>-</div> )}</div>         
        <hr/>      
      
    </>     
  )
}

export default ElixirDisplay
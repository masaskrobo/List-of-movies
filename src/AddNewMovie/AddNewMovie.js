import React, { useState } from 'react';

function AddNewMovie({onNewMovie}){
    const[newMovie,setNewMovie]=useState('');
    const[style, setNewStyle]=useState('');
    

    const Actors = ['Johnny Depp', 'Will Smith', 'Leonardo DiCaprio', 'Angelina Jolie', 'Robin Williams', 'Sandra Bullock', 'Meryl Streep', 
    'Julia Roberts']
    
    const[actor,setNewActor]=useState(Actors);

    function AddText(event){
        setNewMovie(event.target.value)
      
    }
    function AddGenre(event){
        setNewStyle(event.target.value)

    }
    function AddMainActor(event){
        setNewActor(event.target.value)
    }
    
    
    function NewMovie(){
        onNewMovie(newMovie,style,actor)
        setNewMovie('');
        setNewStyle('');
        setNewActor('');

    }
   
   
   

    return(
        <div>
            <label>Add new movie:</label>
            <input placeholder='Add new movie' value={newMovie} onChange={AddText} type='text'></input>
            <label>Add genre:</label>
            <input placeholder='Add genre' type='text' value={style} onChange={AddGenre}></input>
            <label>Add main actors:</label>
            <input placeholder='Main actors' type='search' onChange={AddMainActor} value={actor}></input>
            <button onClick={NewMovie}>Add</button>
           
            
        </div>
    )
}
export default AddNewMovie;
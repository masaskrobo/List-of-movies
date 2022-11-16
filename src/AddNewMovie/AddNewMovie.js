import React, { useState } from 'react';

function AddNewMovie({onNewMovie}){
    const[newMovie,setNewMovie]=useState('');
    const[style, setNewStyle]=useState('');

    function AddText(event){
        setNewMovie(event.target.value)
        setNewStyle(event.target.value)

    }
    function NewMovie(){
        onNewMovie(newMovie,style)
        setNewMovie('')
        setNewStyle('')
    }
   

    return(
        <div>
            <input placeholder='Add new movie' value={newMovie} onChange={AddText} type='text'></input>
            <button onClick={NewMovie}>Add movie</button>
            
        </div>
    )
}
export default AddNewMovie;
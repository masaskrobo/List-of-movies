import React, { useState } from 'react';

function AddNewMovie({onNewMovie}){
    const[newMovie,setNewMovie]=useState('')

    function AddText(event){
        setNewMovie(event.target.value)

    }
    function NewMovie(){
        onNewMovie(newMovie)
        setNewMovie('')
    }

    return(
        <div>
            <input placeholder='Add new movie' value={newMovie} onChange={AddText} type='text'></input>
            <button onClick={NewMovie}>Add movie</button>
        </div>
    )
}
export default AddNewMovie;
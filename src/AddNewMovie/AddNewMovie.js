import React, { useState } from 'react';
import '../AddNewMovie/AddNewMovie.css'

function AddNewMovie({onNewMovie}){
    const[newMovie,setNewMovie]=useState('');
    const[style, setNewStyle]=useState('');
    const[actor,setNewActor]=useState('');
    const[actors,setActors]=useState([])
   
    function AddText(event){
        setNewMovie(event.target.value)}

    function AddGenre(event){
        setNewStyle(event.target.value)}

    function AddMainActor(event){
        setNewActor(event.target.value)
        }
   
    function NewMovie(){
        onNewMovie(newMovie,style,actors)
        setNewMovie('');
        setNewStyle('');
        setNewActor('');
       }

    function AddActors(){
       setActors([...actors,actor])
       setNewActor('')
       
       
       }
   

    return(
      <div className='form__container'>
       
              <div className='form__container_box'>
                   <label className='form_box__text'>Add new movie:</label>
                   <input className='form_box__input' placeholder='Add new movie' value={newMovie} onChange={AddText} type='text'></input>
              </div>

              <div className='form__container_box'>
                   <label className='form_box__text'>Add genre:</label>
                   <input className='form_box__input' placeholder='Add genre' type='text' value={style} onChange={AddGenre}></input>
             </div>

             <div className='form__container_box'> 
                   <label className='form_box__text'>Add main actors:</label>
                   <input className='form_box__input' placeholder='Main actors' type='text'  onChange={AddMainActor} value={actor}></input>
             </div> 
             <div className='button__box'>
                   <button className='button__box__add__actor' onClick={AddActors}>Add Actor</button>
                   <button className='button__box__add' onClick={NewMovie}>Add</button>  
                   {actors.map(function(act){
                          return <p className='add_actors'>{act}</p>
        })} 
             </div>  
           
       
       
        
        </div> 
        
            
    )
}
export default AddNewMovie;
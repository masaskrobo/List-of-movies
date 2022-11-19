import Movies from '../Movies/Movies.js';
import AddNewMovie from '../AddNewMovie/AddNewMovie';
import '../ListOfMovies/ListOfMovies.css'
import React, {useState} from 'react';

function ListOfMovies(){

    const initalList = [
    {  
        name: 'Avatar',
        genre: 'sci-fi action',
        mainActor: ['Sam Worthington'],
        reaction: false
    },
    {
        name: 'The Nutty Professor',
        genre: 'comedy',
        mainActor: ['Eddie Murphy'],
        reaction: false
    },
    {
        name:'The Strangers',
        genre: 'horror',
        mainActor:['Liv Tyler'],
        reaction: true
    },
    {
        name:'Notebook',
        genre: 'romantic',
        mainActor:['Ryan Gosling','Rachel McAdams'],
        reaction: false
    },
    {
        name: 'Labyrinth',
        genre: 'fanstasy',
        mainActor: ['David Bowie'],
        reaction: true
    },
    {
        name:'Night at the Museum',
        genre:'comedy',
        mainActor:['Ben Stiller'],
        reaction: false
    },{
        name: 'Pinocchio',
        genre: 'musical fantasy',
        mainActor: ['Tom Hanks'],
        reaction: true
    },
    {  name: 'Jumanji',
       genre: 'fantasy adventure',
       mainActor: ['Dwayne Johnson'],
       reaction: false
    },
]

const[movie,setMovie]=useState(initalList)

function DeleteMovie(deleteThisMovie){
    const copyMovies=[...movie]
    copyMovies.splice(deleteThisMovie,1)

    setMovie(copyMovies)}

function ReactionMovies(status){
    const copyAllMovies=[...movie]
    copyAllMovies[status].reaction= !
    copyAllMovies[status].reaction 
     
    setMovie(copyAllMovies)}

function AddMovie(newMovie,style,[actor]){
    console.log(newMovie)
    const AddMovie={
    name: newMovie,
    genre: style,
    mainActor:[actor],
    reaction:false }

    setMovie([...movie,AddMovie]) }


    return(
        
    <div className='photo_holder'>
        <div className='container'>
            <h1 className='title'>Movies </h1>
            <AddNewMovie onNewMovie={AddMovie}/>
              <div className='movie_container'>
                
                 {movie.map(function(item,index){
                   return <Movies  onReaction={ReactionMovies} onDelete={DeleteMovie} ordinalNumber={index} onMovies={item}/> })}
               </div>
         </div>
     </div>
     

    )
}
export default ListOfMovies;
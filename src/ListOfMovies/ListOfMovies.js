import Tools from '../Tools/Tools.js';
import React, {useState} from 'react';
function ListOfMovies(){
    const Movies = [
    {  
        name: 'Avatar',
        genre: 'sci-fi action',
        mainActor: 'Sam Worthington'
    },
    {
        name: 'The Nutty Professor',
        genre: 'comedy',
        mainActor: 'Eddie Murphy'
    },
    {
        name:'The Strangers',
        genre: 'horror',
        mainActor:'Liv Tyler'
    },
    {
        name:'Notebook',
        genre: 'romantic',
        mainActor: 'Ryan Gosling, Rachel McAdams'
    },
    {
        name: 'Labyrinth',
        genre: 'fanstasy',
        mainActor: 'David Bowie'
    },
    {
        name:'Night at the Museum',
        genre:'comedy',
        mainActor:'Ben Stiller'
    },{
        name: 'Pinocchio',
        genre: 'musical fantasy',
        mainActor: 'Tom Hanks'
    },
    {  name: 'Jumanji',
       genre: 'fantasy adventure',
       mainActor: 'Dwayne Johnson'

    }
]
const[movie,setMovie]=useState(Movies)

function DeleteMovie(deleteThisMovie){
    const copyMovies=[...movie]
    copyMovies.splice(deleteThisMovie,1)

    setMovie(copyMovies)
}


     return(
        <div>
            <p>List of Movies</p>
            {Movies.map(function(item){
                return <Tools onDelete={DeleteMovie} onTools={item}/>
            }
            )}
           
        </div>

    )
}
export default ListOfMovies;
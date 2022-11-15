
function Movies({onMovies, onDelete,ordinalNumber,onReaction}){
    return(
        <div>
           
            <p>{onMovies.name}</p>
            <p>{onMovies.genre}</p>
            <p>{onMovies.mainActor}</p>
            <button onClick={()=>{onDelete(ordinalNumber)}}>Delete Movie</button>
            <button onClick={()=>{onReaction(ordinalNumber)}}>{onMovies.reaction ? 'like' : 'dislike'}</button>
         
        </div>
    )
}
export default Movies;
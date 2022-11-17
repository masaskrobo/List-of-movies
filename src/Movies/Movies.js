
function Movies({onMovies, onDelete,ordinalNumber,onReaction,onActor}){
    return(
        <div>
           
            <p>{onMovies.name}</p>
            <p>{onMovies.genre}</p>
            <p>{onMovies.mainActor}</p>
            <p>{onActor.mainActor}</p>
            <button onClick={()=>{onDelete(ordinalNumber)}}>Delete Movie</button>
            <button onClick={()=>{onReaction(ordinalNumber)}}>{onMovies.reaction ? 'like' : 'dislike'}</button>
         
        </div>
    )
}
export default Movies;
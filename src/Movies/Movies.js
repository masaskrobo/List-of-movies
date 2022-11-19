import '../Movies/Movies.css';
import {BsTrash} from 'react-icons/bs';
import {AiOutlineLike} from 'react-icons/ai';
import {AiOutlineDislike} from 'react-icons/ai'
function Movies({onMovies, onDelete,ordinalNumber,onReaction}){

    return(
        <div className='movie_container__holder'>
               <p className='movie_container__holder__text'>{onMovies.name}</p>
               <p className='movie_container__holder__genre'>{onMovies.genre}</p>
               {onMovies.mainActor.map(function(actor){
                   return  <p className='movie_container__holder__actor'>{actor}</p> })}
            <div className='icons__holder'>
                <button className='button_trash' onClick={()=>{onDelete(ordinalNumber)}}><BsTrash className='trash__icons'/></button>
                 <button className='button_reaction' onClick={()=>{onReaction(ordinalNumber)}}>{onMovies.reaction ? <AiOutlineLike className='reaction_icons'/> : <AiOutlineDislike className='reaction_icons'/> }</button>
            </div>
        </div>
    )
}
export default Movies;
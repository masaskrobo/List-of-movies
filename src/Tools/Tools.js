
function Tools({onTools, onDelete}){
    return(
        <div>
           
            <p>{onTools.name}</p>
            <p>{onTools.genre}</p>
            <p>{onTools.mainActor}</p>
            <button onClick={onDelete}>Delete Movie</button>
         
        </div>
    )
}
export default Tools;
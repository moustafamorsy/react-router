

function AddMovie(props) {



    return(
        props.addmovie &&  <div style={{backgroundColor:"balck",position: 'absolute',marginTop:'50px',left:"70%",right:"30%"}}>
           <input placeholder="add poster" name="MoviePoster" value={props.movie.MoviePoster} onChange={props.add} />
            <input placeholder="add rating" name="MovieRating" value={props.movie.MovieRating} onChange={props.add} />
            <input placeholder="add title" name="MovieTitle" value={props.movie.MovieTitle} onChange={props.add} />
            <input placeholder="add description"name="MovieDescription" value={props.movie.MovieDescription} onChange={props.add} />
            <input placeholder="add trailerURl" name="TrailerUrl" value={props.movie.TrailerUrl} onChange={props.add} />
            <button onClick={props.push} >Add</button> 
        </div>
        
    )
    
}

export default AddMovie;
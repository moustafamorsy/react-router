



function movieCard(props) {

    const styles ={

    movieCard :{

        backgroundColor: "dimgray",
        width:"200px" ,
       marginTop: "10px",
        marginLeft: "10px",
      
       
   },
   movieData:{

    textAlign: "center",

   },
 img:{
      
    maxWidth:"100%",
   

 },title:{

    display: "flex",
    justifyContent:"center",
    flexWrap:"wrap",
    alignItems: "baseline",
   
  

 },description:{

     fontSize: "0.8rem",
     padding: "10px",
     margin : 0,
     color: "white",
     fontWeight: "bold",

 },button:{

 padding: "10px",
 fontWeight: "bold",
 width: "100px",
  letterSpacing: "2px",
 marginBottom: "20px",
  cursor: "pointer",
  border:"none",
  backgroundColor: "transparent",
  
 }


    }
  const {movieCard , movieData ,img , title , description , button} = styles

    return(

       
         <article key={props.id} style={movieCard} className="movie-card">
          
          <img style={img} src={props.MoviePoster} alt="Movie poster" />

          <section style={movieData} className="movieData">

             <div style={title}>
             <h1>{props.MovieTitle}</h1>
             <h3 style ={{color: "white"}}> R:({props.MovieRating})</h3>
             </div>
             <p style={description}>{props.MovieDescription}</p>

             <button style={button} ></button>

           

          </section>
        

        </article> 

    )
    
}

export default movieCard;
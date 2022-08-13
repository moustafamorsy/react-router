import { useNavigate, useParams } from "react-router-dom";

import ReactPlayer from 'react-player'
import data from "../component/MovieList";

function CheckMovie(){
  const navigate = useNavigate();
    const {id} = useParams();

   const pnt = data.find(d => d.id === id);



    return(
        
        <article>
    {id}
  <ReactPlayer 

 url={pnt.TrailerUrl} type="youtube" />


 
    <h2>{pnt.MovieDescription}</h2>

    <button onClick={() => navigate( pnt.id === "1" ? `/Movie-list`:`/despndtrailer/${parseInt(id)- 1}`)}>Back</button>
    <button onClick={() => navigate(data.length > pnt.id ?`/despndtrailer/${parseInt(id)+ 1}`:`/Movie-list`)}>next</button>
        </article>
    )
}

export default CheckMovie;
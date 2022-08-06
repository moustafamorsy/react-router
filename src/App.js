import Nav from "./component/nav";
import Form from "./component/movieform";
import React, { useState } from "react";
import data from "./component/MovieList";
import Moviecard from "./component/movieCard";
import Filter from "./component/filterMovie";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const [plus, setPlus] = useState(false);

  const [rating, setRating] = useState("");

  const [mydata, setMYData] = useState(data);

  const [newMovie, setNewMovie] = useState({
    id: "",
    MoviePoster: "",
    MovieRating: "",
    MovieTitle: "",
    MovieDescription: "",
    TrailerUrl: "",
  });

  const Movie = mydata
    .filter((val) =>  {
      if (rating === "Rating") {
        return val;
      } else if (val.MovieRating.includes(rating)) {
        return val;
      }
      return false;
    }
    )
    .filter((val) => {
      if (search === "") {
        return val;
      } else if (val.MovieTitle.toLowerCase().includes(search.toLowerCase())) {
        return val;
      }
      return false;
    })
    .map((Movies) => {
      return <Moviecard key={Movies.id} {...Movies} />;
    });

  function pushMovie() {
    setMYData([...mydata, { ...newMovie, id: mydata.length + 1 }]);
  }
  console.log(mydata);

  function addopen() {
    setPlus((prevPlus) => !prevPlus);
  }

  function handleRating(e) {
    setRating(e.target.value);
  }
  function handlechange(e) {
    setSearch(e.target.value);
  }
  console.log(plus);
  function addmovie(e) {
    const { name, value } = e.target;

    setNewMovie((add) => ({
      ...add,
      [name]: value,
    }));
  }
  console.log(newMovie);
  return (
    <div className="App">
      <Nav />
      <Form add={addmovie} movie={newMovie} push={pushMovie} addmovie={plus} />
      <Filter
        rating={rating}
        rrating={handleRating}
        search={search}
        ssearch={handlechange}
        addopen={addopen}
      />
      <div className="Container">{Movie}</div>
    </div>
  );
}

export default App;

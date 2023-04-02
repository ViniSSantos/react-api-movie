import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "../../config/key";
import { useState } from "react";
import { Container} from "./styles";


function Details () {
  const {id} = useParams();
  //console.log(id);

  const image_path = 'https://image.tmdb.org/t/p/w500/'

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      
      const {title, overview, poster_path, release_date} = data;
      const movie = { 
        title: title,
        sinopse: overview,
        poster_path: `${image_path}${poster_path}`,
        releade_date: release_date,
      }

      console.log(data)
      setMovie(movie)
    })
  }, [id])

  return (
    <Container>
      <div className="movie">
        <img src={movie.poster_path} alt={movie.title}></img>
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="">Data de lançamento: {movie.realese_date}</span>
          <button>Assistir</button>
        </div>


      </div>
    </Container>
  );
}

export default Details;

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiKey } from "../../config/key";
import axios from "axios";
import { Container } from "./styles";

function Details() {
  const { id } = useParams();
  const image_path = 'https://image.tmdb.org/t/p/w500/'

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`);
        const { title, overview, poster_path, release_date } = response.data;
        const movieData = {
          title: title,
          sinopse: overview,
          poster_path: `${image_path}${poster_path}`,
          release_date: release_date,
        }
        setMovie(movieData);
      } catch (error) {
        error.message = "Erro ao carregar os dados, atualize a página";
        window.location.reload();
      }
    }
    fetchMovie();
  }, [id]);

  return (
    <Container>
      {movie && (
        <div className="movie">
          <img src={movie.poster_path} alt={movie.title} />
          <div className="movie-info">
            <h1>{movie.title}</h1>
            <span>Sinopse: {movie.sinopse}</span>
            <span>Data de lançamento: {movie.release_date}</span>
            <Link to="/"><button>Assistir</button></Link>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Details;

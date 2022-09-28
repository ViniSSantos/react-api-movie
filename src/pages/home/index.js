import { Container, MovieList, Movie } from "./styles";
import { apiKey } from '../../config/key'
import { useState, useEffect } from "react";


function Home() {
    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        //consumir api

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(setMovies(data.results))
            })

    }, []) /*Array de depêndencia vazio,para atualizar toda a vez que o componente for recarregado */

    return (
        <Container>
            <h1>React API Movie</h1>
            <MovieList>
                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <a href="google.com"><img src={`${image_path}${movie.poster_path}`} alt={movie.title}></img></a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>

        </Container>
    )
}

export default Home;
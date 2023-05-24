import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'Api-service/ApiService';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w200';
  useEffect(() => {
    const trendingMovies = async () => {
      try {
        const fetchedMovies = await fetchTrendingMovies().then(data =>
          setMovies(data.results)
        );
        return fetchedMovies;
      } catch (error) {
        console.log(error);
      }
    };
    trendingMovies();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              <article>
                <div>
                  <p>Rating: {movie.vote_average}</p>
                <img
                  src={`${imageBaseUrl}${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.title}({movie.original_title})</p>
                <p>{movie.overview}</p>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

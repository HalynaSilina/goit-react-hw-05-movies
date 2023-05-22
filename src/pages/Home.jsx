import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'Api-service/ApiService';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
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
            <NavLink to={`movies/${movie.id}`}>
            <article>
              <img
                src={`${imageBaseUrl}${movie.backdrop_path}`}
                alt={movie.title}
              />
              {movie.title || movie.name}
            </article>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

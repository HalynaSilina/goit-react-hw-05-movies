import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'Api-service/ApiService';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w300';
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

  const getRating = numb => Number(numb).toFixed(1);

  return (
    <section className={css.section}>
      <h1 className={css.section__title}>Trending today</h1>
      <ul className={css.gallery}>
        {movies.map(movie => {
          const rating = getRating(`${movie.vote_average}`);
          return (
            <li key={movie.id} className={css.gallery__item}>
              <Link to={`movies/${movie.id}`}>
                <article>
                  <div>
                    <img
                      src={`${imageBaseUrl}${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <p className={css.item__title}>{movie.title}</p>
                    <p>Rating: {rating}</p>
                  </div>
                </article>
              </Link>
              <details className={css.item__details}>
                <summary>Overview</summary>
                {movie.overview}
              </details>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Home;

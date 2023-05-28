import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'Api-service/ApiService';
import { useLocation } from 'react-router-dom';
import Gallery from 'components/Gallery/Gallery';
import css from './Home.module.css';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
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
    <section className={css.section}>
      <h1 className={css.section__title}>Trending movies today</h1>
      {movies.length > 0 && (
        <Gallery movies={movies} state={{ from: location }} />
      )}
    </section>
  );
};

export default Home;

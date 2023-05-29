import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchByQuery } from 'Api-service/ApiService';
import { MdYoutubeSearchedFor } from 'react-icons/md';
import { IconContext } from 'react-icons';
import Gallery from 'components/Gallery/Gallery';
import css from './Movies.module.css';

const Movies = () => {
  const location = useLocation();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery') ?? '';

  useEffect(() => {
    if (searchQuery === '') return;

    async function fetchMovie() {
      try {
        await fetchByQuery(searchQuery).then(data =>
          setSearchedMovies(data.results)
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ searchQuery: form.elements.query.value.trim() });
  };

  return (
    <div className={css.section}>
      <h1 className={css.section__title}>Search movies</h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          placeholder="Type what you want to find here"
          className={css.searchInput}
        />
        <IconContext.Provider value={{ color: '#EB9A28', size: '3em' }}>
          <button type="submit" className={css.button}>
            <MdYoutubeSearchedFor />
          </button>
        </IconContext.Provider>
      </form>
      {searchedMovies.length > 0 && (
        <Gallery movies={searchedMovies} state={{ from: location }} path={''}/>
      )}
    </div>
  );
};

export default Movies;

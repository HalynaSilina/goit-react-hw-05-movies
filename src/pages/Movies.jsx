import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchByQuery } from 'Api-service/ApiService';

const Movies = () => {
  const location = useLocation();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery') ?? '';
  useEffect(() => {
    if (searchQuery === '') return;

    async function fetchMovie() {
      try {
        await fetchByQuery(searchQuery).then(data => setSearchedMovies(data.results));
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ searchQuery: form.elements.query.value });
  };
  console.log(searchedMovies);
  return (
    <div>
      <h1>Movies</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {searchedMovies.length > 0 && (
        <ul>
          {searchedMovies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Movies;

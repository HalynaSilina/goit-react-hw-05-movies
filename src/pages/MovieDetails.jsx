import { Suspense, useEffect, useState, useRef } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchById } from 'Api-service/ApiService';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [movie, setMovie] = useState({});
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieInfo = async () => {
      try {
        await fetchById(movieId).then(data => setMovie(data));
      } catch (error) {
        console.log(error);
      }
    };
    getMovieInfo();
  }, [movieId]);
  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      {movie.poster_path ? (
        <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
      ) : (
        <div>Not found</div>
      )}
      <NavLink to={'cast'}>Cast</NavLink>
      <NavLink to={'reviews'}>Reviews</NavLink>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

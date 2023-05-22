import { Suspense, useEffect, useState, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchById } from 'Api-service/ApiService';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [movie, setMovie] = useState([]);
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieInfo = async () => {
      if (movieId === '') return;
      try {
        await fetchById(movieId).then(data => setMovie(data));
      } catch (error) {
        console.log(error);
      }
    };
    getMovieInfo();
  }, [movieId]);
  console.log(movie);
  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

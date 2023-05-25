import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'Api-service/ApiService';
import { CastList } from '../CastList/CastList';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchCast() {
      try {
        await fetchCredits(movieId).then(data => setCredits(data.cast));
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [movieId]);
  return (
    <>
      <div>Cast</div>
      {credits.length > 0 ? (
        <CastList credits={credits} />
      ) : (
        <div>No info about the cast.</div>
      )}
    </>
  );
};

export default Cast;

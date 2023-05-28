import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from 'Api-service/ApiService';
import { ReviewsList } from '../ReviewsList/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchReview() {
      try {
        await fetchReviews(movieId).then(data => setReviews(data.results));
      } catch (error) {
        console.log(error);
      }
    }
    fetchReview();
  }, [movieId]);

  return (
    <>
      <div>Reviews</div>
      {reviews.length > 0 ? <ReviewsList reviews={reviews}/> : <div>No reviews for this movie.</div>}
    </>
  );
};
export default Reviews;
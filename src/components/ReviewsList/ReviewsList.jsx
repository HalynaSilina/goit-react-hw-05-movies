import PropTypes from 'prop-types';

export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ author, content }) => {
        return (
          <li key={author}>
            <p>Author: {author}</p>
            <p>Review: {content}</p>
          </li>
        );
      })}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

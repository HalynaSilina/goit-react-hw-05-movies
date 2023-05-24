export const ReviewList = ({ reviews }) => {
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

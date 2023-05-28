import GalleryItem from 'components/GalleryItem/GalleryItem';
import css from './Gallery.module.css';

const Gallery = ({ movies, state }) => {
  const getRating = numb => Number(numb).toFixed(1);
  return (
    <ul className={css.gallery}>
      {movies.map(
        ({ vote_average, release_date, id, poster_path, title, overview }) => {
          const rating = getRating(`${vote_average}`);
          const release = `${release_date}`;
          return (
            <GalleryItem
              key={id}
              rating={rating}
              release={release}
              state={state}
              id={id}
              poster={poster_path}
              title={title}
              overview={overview}
            />
          );
        }
      )}
    </ul>
  );
};
export default Gallery;

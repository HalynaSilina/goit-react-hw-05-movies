import { Link } from 'react-router-dom';
import css from './GalleryItem.module.css';

const GalleryItem = ({
  rating,
  release,
  state,
  id,
  poster,
  title,
  overview,
}) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    <li className={css.gallery__item}>
      <Link to={`${id}`} state={state}>
        <article>
          <div>
            <img src={`${imageBaseUrl}${poster}`} alt={title} />
            <p className={css.item__title}>{title}</p>
            <div className={css.info}>
              <p>Rating: {rating}</p>
              <p>Release date: {release}</p>
            </div>
          </div>
        </article>
      </Link>
      <details className={css.item__details}>
        <summary>Overview</summary>
        {overview}
      </details>
    </li>
  );
};

export default GalleryItem;

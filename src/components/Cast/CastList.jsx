export const CastList = ({ credits }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w200';
  return (
    <ul>
      {credits.map(credit => {
        return (
          <li key={credit.id}>
            {credit.profile_path ? (
              <img
                src={`${imageBaseUrl}${credit.profile_path}`}
                alt={credit.name}
              />
            ) : (
              <div>Not found</div>
            )}
            <p>Name: {credit.name}</p>
            <p>Character: {credit.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

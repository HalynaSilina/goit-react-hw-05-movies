const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '6162be73d8284a514c6daa14bf64a77d';

export async function fetchTrendingMovies() {
  return await fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`).then(
    res => {
      if (!res.ok) Promise.reject(new Error('Opps...something going wrong'));
      return res.json();
    }
  );
}

export async function fetchById(id) {
  return await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then(
    res => {
      if (!res.ok) Promise.reject(new Error('Opps...something going wrong'));
      return res.json();
    }
  );
}
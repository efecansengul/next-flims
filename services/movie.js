const API_URL = "https://api.themoviedb.org/3";

const fetchMovieApi = async (pathname, query = "") => {
  const res = await fetch(
    `${API_URL}${pathname}?api_key=${process.env.API_KEY}&${query}`
  );
  if (!res.ok) {
    throw new Error(`Fetch failed with status ${res.status}`);
  }

  return res.json();
};
export { fetchMovieApi };

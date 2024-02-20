import HomeContainer from "@/_containers/home";
const API_URL = "https://api.themoviedb.org/3";

async function getSingleCategory(genreId) {
  try {
    const res = await fetch(
      `${API_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}`
    );

    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}

async function getCategories() {
  try {
    const res = await fetch(
      `${API_URL}/genre/movie/list?api_key=${process.env.API_KEY}`
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}

async function getUpcomingMovies() {
  try {
    const res = await fetch(
      `${API_URL}/movie/upcoming?api_key=${process.env.API_KEY}`
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}

async function getPopulerMovies() {
  try {
    const res = await fetch(
      `${API_URL}/movie/popular?api_key=${process.env.API_KEY}`
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}

async function getTopRatedMovies() {
  try {
    const res = await fetch(
      `${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}

async function Home({ params }) {
  let selectedCategory;
  const topRatedPromise = getTopRatedMovies();
  const populerPromise = getPopulerMovies();
  const upcomingPromise = getUpcomingMovies();
  const categoryPromise = getCategories();
  const [
    { results: topRatedMovies },
    { results: populerMovies },
    { results: upcomingMovies },
    { genres: categories },
  ] = await Promise.all([
    topRatedPromise,
    populerPromise,
    upcomingPromise,
    categoryPromise,
  ]);

  if (params.category?.length >= 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }

  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      populerMovies={populerMovies}
      upcomingMovies={upcomingMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0],
        movies: selectedCategory ? selectedCategory.slice(0, 15) : [],
      }}
    />
  );
}
export default Home;

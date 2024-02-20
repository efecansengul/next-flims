import MovieContainer from "@/_containers/movie";

import { notFound } from "next/navigation";
import Link from "next/link";
const API_URL = "https://api.themoviedb.org/3";

async function getMovie(movieId) {
  try {
    const res = await fetch(
      `${API_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}

async function MoviePage({ params, searchParams }) {
  const movieDetail = await getMovie(params.id);

  if (!movieDetail) {
    notFound();
  }

  return (
    <>
      <MovieContainer movie={movieDetail} />
      <Link
        href="/"
        style={{ textDecoration: "underline", fontSize: "1.4rem" }}
      >
        Back
      </Link>
    </>
  );
}
export default MoviePage;

import FeaturedMovie from "@/_components/fetured-movie";

function MovieContainer({ movie }) {
  return <FeaturedMovie movie={movie} isCompact={false} />;
}
export default MovieContainer;

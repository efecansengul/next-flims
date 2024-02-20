import FeaturedMovie from "@/_components/fetured-movie";

import Categories from "@/_components/categories";
import MoviesSection from "@/_components/movies-section";

function HomeContainer({
  topRatedMovies = [],
  populerMovies = [],
  upcomingMovies = [],
  categories = [],
  selectedCategory,
}) {
  return (
    <>
      <FeaturedMovie movie={topRatedMovies?.[1]} isCompact={true} />
      <Categories genres={categories.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          movies={selectedCategory.movies}
          title={
            categories.find((genre) => genre.id == selectedCategory.id).name
          }
        />
      )}
      <MoviesSection movies={upcomingMovies.slice(11, 21)} title="Upcoming" />
      <MoviesSection
        movies={populerMovies.slice(1, 13)}
        title="Populer FILMS"
      />
      <MoviesSection
        movies={topRatedMovies.slice(6, 19)}
        title="Favorite FILMS"
      />
    </>
  );
}

export default HomeContainer;

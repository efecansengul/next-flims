import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
function MoviesSection({ movies, title }) {
  return (
    <div className={styles.moviesWrapper}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie, index) => (
          <div className={styles.movie} key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesSection;

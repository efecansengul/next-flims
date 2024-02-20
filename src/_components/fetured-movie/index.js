import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";
function FeaturedMovie({ isCompact = true, movie = {} }) {
  const { poster_path, title, overview, original_language } = movie;

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>

        <p
          className={`${styles.overview} ${
            isCompact ? styles.shortOverview : ""
          }`}
        >
          {overview}
        </p>
        <p>
          language: {original_language} / Imdb:{" "}
          <span className={styles.vote}>{movie.vote_average}</span>
        </p>
        <div className={styles.actionButton}>
          <Link className={styles.playButton} href={`/movie/${movie.id}`}>
            Play
          </Link>
          <button className={styles.addButton}>Add</button>
        </div>
        <div className={styles.moviePoster}>
          <div className={styles.moviePosterOverlay}></div>
          <Image
            fill
            alt={title}
            unoptimized
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          />
        </div>
      </div>
    </>
  );
}

export default FeaturedMovie;

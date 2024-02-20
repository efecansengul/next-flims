import Link from "next/link";
import styles from "./styles.module.css";
function Categories({ genres }) {
  return (
    <div className={styles.genres}>
      {genres.map((genre) => (
        <Link href={`${genre.id}`} key={genre.id} className={styles.gen}>
          <div>{genre.name}</div>
        </Link>
      ))}
    </div>
  );
}
export default Categories;

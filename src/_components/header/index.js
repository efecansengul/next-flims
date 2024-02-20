import Link from "next/link";
import { SlDisc } from "react-icons/sl";
import styles from "./styles.module.css";
function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <nav className={styles.navigationMenu}>
          <Link href="/" className={styles.logo}>
            <SlDisc />
            NextFilms
          </Link>

          <Link href="/movies">Movies</Link>
          <Link href="/series">Series</Link>
          <Link href="/animations">Animations</Link>
        </nav>
        <div className={styles.user}>
          <label>
            Active User: <span>Efecan Sengul</span>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;

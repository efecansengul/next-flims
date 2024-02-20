import Loading from "../../_components/loading/index";
import styles from "./style.module.css";
function FeaturedLoading() {
  return (
    <div style={{ height: 278 }} className={styles.movieWrapper}>
      <Loading />
    </div>
  );
}

export default FeaturedLoading;

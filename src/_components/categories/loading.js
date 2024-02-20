import Skeleton from "../../_components/skeleton/index";
import styles from "./styles.module.css";
function CategoriesLoading() {
  return (
    <div className={styles.genres}>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={72} />
        ))}
    </div>
  );
}
export default CategoriesLoading;

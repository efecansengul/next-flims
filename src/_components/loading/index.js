import styles from "./styles.module.css";
function Loading() {
  return (
    <div className={styles.spinner} style={{ fontSize: "11px" }}>
      <div className={styles.head}></div>
    </div>
  );
}
export default Loading;

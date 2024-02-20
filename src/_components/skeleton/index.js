import styleses from "./styles.module.css";
function Skeleton({ width, height }) {
  return <div className={styleses.skeleton} styles={{ width, height }}></div>;
}
export default Skeleton;

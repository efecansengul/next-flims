import Loading from "@/_components/loading";

function LoadingMovies() {
  return (
    <div
      style={{
        height: "100%",

        display: "flex",
        alignItems: "center",
      }}
    >
      <Loading />
    </div>
  );
}
export default LoadingMovies;

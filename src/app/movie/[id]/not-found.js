import Link from "next/link";
function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ fontWeight: "200" }}>
        We couldn&apos;t find the movie you loking for🤔
      </h2>
      <Link href="/" style={{ textDecoration: "underline", fontWeight: "200" }}>
        Go home
      </Link>
    </div>
  );
}
export default NotFound;

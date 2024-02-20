"use client";
import Link from "next/link";
function Error() {
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
      <h2 style={{ fontWeight: "200" }}>An error has occured.Sorry😏</h2>
      <Link href="/" style={{ textDecoration: "underline", fontWeight: "200" }}>
        Go home
      </Link>
    </div>
  );
}
export default Error;

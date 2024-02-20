import Link from "next/link";
function Footer() {
  return (
    <footer
      style={{
        fontSize: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link href="https://github.com/efecansengul">@github</Link>
    </footer>
  );
}

export default Footer;

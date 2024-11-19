import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <p>
        Welcome to 
      </p>
      {/* Logo */}
      <Image src="/logo.png" alt="TypeWryteR Logo" width={150} height={150} />
      <h1 style={{ fontSize: "3rem", margin: "20px 0" }}>TypeWryter</h1>
      <p>
        the interactive storytelling platform where your
        imagination shapes the journey.
      </p>
    </div>
  );
}

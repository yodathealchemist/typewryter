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
      {/* Circular Logo */}
      <div
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/logo.webp"
          alt="TypeWryteR Logo"
          width={200}
          height={200}
          style={{ objectFit: "cover" }}
        />
      </div>
      <h1 style={{ fontSize: "3rem", margin: "20px 0" }}>TypeWryter</h1>
      <p>
        the interactive storytelling platform where your
        imagination shapes the journey.
      </p>
    </div>
  );
}

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
        Welcome to the interactive storytelling platform where your imagination shapes the journey.
      </p>
    </div>
  );
}

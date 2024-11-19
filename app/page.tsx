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

      {/* Advertisement Placeholder at the top */}
      <div
        style={{
          width: "80%",
          height: "300px",
          backgroundColor: "#f0f0f0",
          border: "2px dashed #ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <p style={{ color: "#999" }}>Advertisement Placeholder (Top)</p>
      </div>

      {/* Main content area */}
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "20px 0",
        }}
      >
        <h1>Welcome to the interactive storytelling platform where your imagination shapes the journey.</h1>
        <p>Explore stories, contribute, and see how they evolve!</p>
      </div>

      {/* Advertisement Placeholder at the bottom */}
      <div
        style={{
          width: "80%",
          height: "300px",
          backgroundColor: "#f0f0f0",
          border: "2px dashed #ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <p style={{ color: "#999" }}>Advertisement Placeholder (Bottom)</p>
      </div>
    </div>
  );
}

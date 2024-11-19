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

      {/* Main content area */}
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "20px 0",
        }}
      >
        <h2 style={{ fontSize: "2rem" }}>Welcome to the interactive storytelling platform</h2>
        <h3 style={{ fontSize: "1.5rem" }}>where your imagination shapes the journey.</h3>
        <p>Explore stories, contribute, and see how they evolve!</p>
      </div>

      {/* Advertisement Placeholder */}
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
        <p style={{ color: "#999" }}>Advertisement Placeholder</p>
      </div>
    </div>
  );
}

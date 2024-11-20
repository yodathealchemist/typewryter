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
      {/* Top Advertisement Placeholder */}
      <div
        style={{
          width: "80%",
          height: "100px",
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

      {/* Main Content Area with Right Advertisement */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          columnGap: "20px", // Space between content and right ad
          alignItems: "start",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {/* Main Content */}
        <div
          style={{
            textAlign: "center",
            margin: "0 auto", // Center the content in its column
            maxWidth: "600px",
          }}
        >
          <h3 style={{ fontSize: "1.5rem" }}>Welcome to the</h3>
          <h2 style={{ fontSize: "2rem" }}>interactive storytelling platform</h2>
          <h3 style={{ fontSize: "1.5rem" }}>
            where your imagination shapes the journey.
          </h3>
          <p>Explore stories, contribute, and see how they evolve!</p>
        </div>

        {/* Right Advertisement Placeholder */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0", // Ensure placeholders touch each other
          }}
        >
          <div
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "#f0f0f0",
              border: "2px dashed #ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#999" }}>Advertisement Placeholder</p>
          </div>
          <div
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "#f0f0f0",
              border: "2px dashed #ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#999" }}>Advertisement Placeholder</p>
          </div>
        </div>
      </div>

      {/* Bottom Advertisement Placeholder */}
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

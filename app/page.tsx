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

      {/* Image */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px", // Maximum container width for the image
          marginBottom: "20px",
        }}
      >
        <img
          src="/home.png"
          alt="A visual representation of the type_wryter platform"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            aspectRatio: "16 / 9", // Optional: explicitly enforce aspect ratio
          }}
        />
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Welcome to the</h3>
        <h2 style={{ fontSize: "2rem", margin: "0.5rem 0" }}>
          interactive storytelling platform
        </h2>
        <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>
          where your imagination shapes the journey.
        </h3>
        <p style={{ color: "#333", margin: "1rem 0" }}>
          Explore stories, contribute, and see how they evolve!
        </p>
      </div>

      {/* Bottom Ad */}
      <div
        style={{
          width: "100%",
          maxWidth: "970px",
          height: "250px",
          backgroundColor: "#f0f0f0",
          border: "2px dashed #ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <p style={{ color: "#666", margin: 0 }}>970x250 Ad Placeholder</p>
      </div>
    </div>
  );
}

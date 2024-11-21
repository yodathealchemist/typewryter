export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "40px",
        textAlign: "center",
        position: "relative", // Allow for ad placement
      }}
    >
      {/* Top Ad (Standard size, e.g., 728x90) */}
      <div
        style={{
          width: "100%",
          maxWidth: "728px",
          height: "90px",
          backgroundColor: "#f0f0f0",
          border: "2px dashed #ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
        className="top-ad"
      >
        <p style={{ color: "#999" }}>728x90 Ad Placeholder</p>
      </div>

      {/* Main Content in the Center */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          zIndex: 1, // Ensure main content stays above ads
        }}
      >
        <h3 style={{ fontSize: "1.5rem" }}>Welcome to the</h3>
        <h2 style={{ fontSize: "2rem" }}>interactive storytelling platform</h2>
        <h3 style={{ fontSize: "1.5rem" }}>
          where your imagination shapes the journey.
        </h3>
        <p>Explore stories, contribute, and see how they evolve!</p>
      </div>


      {/* Bottom Ad (Large size, e.g., 970x250) */}
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
        className="bottom-ad"
      >
        <p style={{ color: "#999" }}>970x250 Ad Placeholder</p>
      </div>

      {/* Add Responsive Styling */}
      <style>
        {`
          @media (min-width: 768px) {
            .right-ad {
              display: flex; /* Show right ad on larger screens */
            }
          }
        `}
      </style>
    </div>
  );
}

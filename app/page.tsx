export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Center content vertically
        alignItems: "center", // Center content horizontally
        minHeight: "100vh", // Full height of the viewport
        padding: "40px",
        textAlign: "center",
      }}
    >
      {/* Top Responsive Ad */}
      <div
        style={{
          width: "100%",
          maxWidth: "728px",
          height: "auto", // Allow flexible height
          backgroundColor: "#f0f0f0",
          border: "2px dashed #ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <p style={{ color: "#999" }}>Responsive Ad Placeholder</p>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto", // Left placeholder, content, right ads
          columnGap: "20px",
          alignItems: "start",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {/* Left Placeholder */}
        <div
          style={{
            display: "none", // Hide on small screens
          }}
          className="ad-placeholder"
        ></div>

        {/* Main Content */}
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h3 style={{ fontSize: "1.5rem" }}>Welcome to the</h3>
          <h2 style={{ fontSize: "2rem" }}>interactive storytelling platform</h2>
          <h3 style={{ fontSize: "1.5rem" }}>
            where your imagination shapes the journey.
          </h3>
          <p>Explore stories, contribute, and see how they evolve!</p>
        </div>

        {/* Right-Side Responsive Ads */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "300px",
          }}
          className="right-ads"
        >
          <div
            style={{
              width: "100%",
              height: "auto", // Allow flexible height
              aspectRatio: "4 / 3", // Maintain a 4:3 ratio
              backgroundColor: "#f0f0f0",
              border: "2px dashed #ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#999" }}>Responsive Ad Placeholder</p>
          </div>
          <div
            style={{
              width: "100%",
              height: "auto", // Allow flexible height
              aspectRatio: "4 / 3",
              backgroundColor: "#f0f0f0",
              border: "2px dashed #ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#999" }}>Responsive Ad Placeholder</p>
          </div>
        </div>
      </div>

      {/* Bottom Responsive Ad */}
      <div
        style={{
          width: "100%",
          maxWidth: "970px",
          height: "auto", // Allow flexible height
          aspectRatio: "970 / 250", // Maintain 970x250 Billboard proportions
          backgroundColor: "#f0f0f0",
          border: "2px dashed #ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <p style={{ color: "#999" }}>Responsive Ad Placeholder</p>
      </div>

      {/* Add Responsive Styling */}
      <style>
        {`
          @media (max-width: 768px) {
            .right-ads {
              display: none; /* Hide right ads on small screens */
            }
          }
          .ad-placeholder {
            display: block;
          }
        `}
      </style>
    </div>
  );
}

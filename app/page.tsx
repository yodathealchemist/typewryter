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
      {/* Top Google Ad (728x90 Leaderboard) */}
      <div
        style={{
          width: "728px",
          height: "90px",
          backgroundColor: "#f0f0f0",
          border: "2px dashed #ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <p style={{ color: "#999" }}>728x90 Ad Placeholder</p>
      </div>

      {/* Main Content Area with Left and Right Placeholders */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto", // Left placeholder, content, right ads
          columnGap: "20px", // Space between columns
          alignItems: "center", // Align vertically
          justifyContent: "center", // Center the grid horizontally
          width: "100%",
    //      maxWidth: "1000px",
        }}
      >
        {/* Left Placeholder (Empty, Same Size as Right Ads) */}
        <div
          style={{
            width: "300px",
            height: "500px", // Matches the combined height of the right ads
          }}
        ></div>

        {/* Main Content */}
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto", // Center main content within its column
          }}
        >
          <h3 style={{ fontSize: "1.5rem" }}>Welcome to the</h3>
          <h2 style={{ fontSize: "2rem" }}>interactive storytelling platform</h2>
          <h3 style={{ fontSize: "1.5rem" }}>
            where your imagination shapes the journey.
          </h3>
          <p>Explore stories, contribute, and see how they evolve!</p>
        </div>

        {/* Right-Side Google Ads (2x 300x250 Medium Rectangles) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0", // Remove space between ads to make them touch
          }}
        >
          <div
            style={{
              width: "300px",
              height: "250px",
              backgroundColor: "#f0f0f0",
              border: "2px dashed #ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#999" }}>300x250 Ad Placeholder</p>
          </div>
          <div
            style={{
              width: "300px",
              height: "250px",
              backgroundColor: "#f0f0f0",
              border: "2px dashed #ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#999" }}>300x250 Ad Placeholder</p>
          </div>
        </div>
      </div>

      {/* Bottom Google Ad (970x250 Billboard) */}
      <div
        style={{
          width: "970px",
          height: "250px",
          backgroundColor: "#f0f0f0",
          border: "2px dashed #ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <p style={{ color: "#999" }}>970x250 Ad Placeholder</p>
      </div>
    </div>
  );
}

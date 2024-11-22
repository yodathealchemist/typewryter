export default function Imprint() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        textAlign: "center",
        position: "relative", // Allow for ad placement
      }}
    >

      {/* Ad (Large size, e.g., 970x250) */}
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

      <h1>Imprint (Impressum)</h1>
      <p><br />Dr. Yuno Rolfes<br />
      Albert-Schweitzer-Str. 22<br />
      32602 Vlotho<br />
      Germany<br /><br />
      Email: typewryter@gmx.net<br />
      Phone: +49(0) 5733 / 95371</p>

      {/* Ad (Large size, e.g., 970x250) */}
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
      
    </div>
  );
}

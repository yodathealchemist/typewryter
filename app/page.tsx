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
      {/* Top Google Ad */}
      <div
        style={{
          width: "80%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", maxWidth: "728px", height: "90px" }}
          data-ad-client="ca-pub-xxxxxxxxxxxxxxx"
          data-ad-slot="1234567890"
        ></ins>
      </div>

      {/* Main Content Area with Right-Side Google Ads */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          columnGap: "20px",
          alignItems: "start",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {/* Main Content */}
        <div
          style={{
            textAlign: "center",
            margin: "0 auto",
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

        {/* Right-Side Google Ads */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "300px", height: "250px" }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxx"
            data-ad-slot="1234567891"
          ></ins>
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "300px", height: "250px" }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxx"
            data-ad-slot="1234567892"
          ></ins>
        </div>
      </div>

      {/* Bottom Google Ad */}
      <div
        style={{
          width: "80%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", maxWidth: "728px", height: "90px" }}
          data-ad-client="ca-pub-xxxxxxxxxxxxxxx"
          data-ad-slot="1234567893"
        ></ins>
      </div>
    </div>
  );
}

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

      {/* Image */}
      <div
        style={{
          width: "100%",
          maxWidth: "800px", // Maximum container width for the image
          marginBottom: "20px",
        }}
      >
      <Image
        src="/home.png"
        alt="A visual representation of the type_wryter platform"
        layout="responsive"
        width={1792} // Original width of the image
        height={1024} // Original height of the image
        priority // Ensures the image is loaded early for performance
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

      {/* Ad (Standard size, e.g., 728x90) */}
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
        
        <p>
          Step into a world of choice-driven storytelling and iscover tales that will intrigue, inspire, and immerse you in unforgettable adventures.
        </p>
        <div>
          <h3>The Clockmaker&apos;s Curse</h3>
          <p>A mysterious clock tower. A journalist chasing the truth. Uncover the dark secrets of Havensbrook before time runs out.</p>
          <h3>Whispers of the Verdant Throne</h3>
          <p>In a land of crumbling elemental realms, a quiet herbalist is called to restore balance. Will she save the world – or destroy it?</p>
          <h3>Beneath the Iron Skies</h3>
          <p>A mechanic with big dreams and a pianist with a haunted past. Can they break free from the iron skies that bind them?</p>
        </div>
        <p>
          With more stories in the works, <em>Typewryter</em> invites you to explore, choose, and shape your own path. Begin your journey today.
        </p>
        <p>
          Explore, contribute, and see how the stories evolve!
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

"use client";

import Image from "next/image";

export default function Story() {
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
        <p style={{ color: "#999" }}>Ad Placeholder</p>
      </div>
      
      <h1>Beneath the Iron Skies</h1>
      
      {/* Image */}
      <div
        style={{
          width: "100%",
          maxWidth: "800px", // Maximum container width for the image
          marginBottom: "20px",
        }}
      >
      <Image
        src="/ironskies.webp"
        alt="Beneath the Iron Skies cover"
        layout="responsive"
        width={1792} // Original width of the image
        height={1024} // Original height of the image
      />
      </div>
         
      {/* Main Content */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
<p>In a city where the sky is painted with soot and dreams are forged in steel, Clara Fontaine is a mechanic with a vision beyond the clanging factories and endless train tracks. All she wants is freedom – a chance to leave it all behind and craft a future on her own terms.</p>
<p>Jay Morrow is a pianist hiding from the wreckage of his past, his music echoing through the crumbling railway station where he now plays for strangers. When their worlds collide over the repair of a forgotten piano, neither expects the spark that ignites between them.</p>
<p>Bound by a shared determination to escape their circumstances, Clara and Jay uncover secrets, confront old wounds, and dare to dream again. But as debts are called and choices must be made, they&apos;ll find themselves at a crossroads: risk it all for freedom and love – or lose everything to the iron skies.</p>
<p>In this moving tale of resilience, redemption, and romance, Beneath the Iron Skies is a testament to the courage it takes to break free and the beauty that lies in forging a new path – together.</p>
      </div>
      {/* Include Feedback Form */}
      <b>Coming soon!</b>
      {/* <FeedbackForm story="3" chapter="0" /> */}

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
        <p style={{ color: "#999" }}>Ad Placeholder</p>
      </div>
    </div>
  );
}

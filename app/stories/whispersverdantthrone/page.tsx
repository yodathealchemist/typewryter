"use client";

import Link from 'next/link';
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
      
      <h1>Whispers of the Verdant Throne</h1>
      
      {/* Image */}
      <div
        style={{
          width: "100%",
          maxWidth: "800px", // Maximum container width for the image
          marginBottom: "20px",
        }}
      >
      <Image
        src="/verdantthrone.webp"
        alt="Whispers of the Verdant Throne cover"
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
<p>A world on the brink of ruin. A throne steeped in secrets. A young woman destined to decide its fate.</p>
<p>In the magical land of Aeloria, the balance of the five elemental realms is crumbling. Crops fail, storms rage, and the people cry out for salvation. At the heart of the chaos lies the Verdant Throne, a mystical seat of power that once kept harmony across the realms – now silent and forgotten.</p>
<p>For Ceyla, a quiet herbalist from the village of Bramblehold, destiny comes uninvited. When a glowing spirit reveals her lineage as the last Scion of Verdance, she must embark on a perilous journey to uncover the Throne&apos;s ancient secrets and restore balance to a fractured world.</p>
<p>Joined by a band of unlikely allies – a fallen warrior, a clumsy mage, a cunning thief, and a stone-hearted giant – Ceyla must traverse the elemental realms, face corrupted magic, and confront the shadowy forces that threaten to consume Aeloria. But as the truth of her ancestor&apos;s betrayal comes to light, Ceyla must make an impossible choice: restore the Throne and save her world, or destroy it forever.</p>
<p>Whispers of the Verdant Throne is a sweeping fantasy adventure filled with elemental magic, gripping betrayals, and the enduring question: What would you sacrifice to save the world?</p>
      </div>

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

      <div style={{ width: "300px" }}>
        <h3>List of Chapters:</h3>
        <hr />
        <Link href="/stories/whispersverdantthrone/chapter1" className="link">
          Chapter 1: The Silent Bloom
        </Link>
        <hr />
        <Link href="/stories/whispersverdantthrone/chapter2" className="link">
          Chapter 2: Verdance Unraveled<br />
          <b>(Latest Chapter)</b>
        </Link>
        <hr />
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
        <p style={{ color: "#999" }}>Ad Placeholder</p>
      </div>
    </div>
  );
}

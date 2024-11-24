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
        <p style={{ color: "#999" }}>728x90 Ad Placeholder</p>
      </div>
      
      <h1>The Clockmaker&apos;s Curse</h1>
      
      {/* Image */}
      <div
        style={{
          width: "100%",
          maxWidth: "800px", // Maximum container width for the image
          marginBottom: "20px",
        }}
      >
      <Image
        src="/clockmakerscurse.webp"
        alt="The Clockmaker's Curse cover"
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
<p>When journalist Amelia Carter returns to the quaint coastal town of Havensbrook, she hopes to quietly settle her late uncle’s estate and leave her past behind. But the town’s iconic clock tower hides more than just its timeless chimes – it holds the key to a mystery that has haunted Havensbrook for decades.</p>
<p>As Amelia delves into her uncle’s belongings, she uncovers cryptic clues that point to a sinister truth buried deep within the town’s history. Secrets long thought forgotten begin to resurface, and powerful forces will do anything to keep them hidden. Caught in a dangerous game of deception and betrayal, Amelia must confront her own fears and uncover the truth before time runs out.</p>
<p>The Clockmaker’s Curse is a suspenseful and atmospheric thriller that will keep you turning pages long into the night.</p>
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
        <p style={{ color: "#999" }}>728x90 Ad Placeholder</p>
      </div>

      <div style={{ width: "300px" }}>
        <h3>List of Chapters:</h3>
        <hr />
        <Link href="/stories/clockmakerscurse/chapter1" className="link">
          Chapter 1: Return to Havensbrook
        </Link>
        <hr />
        <Link href="/stories/clockmakerscurse/chapter2" className="link">
          Chapter 2: Welcome Home
        </Link>
        <hr />
        <Link href="/stories/clockmakerscurse/chapter3" className="link">
          Chapter 3: Shadows
        </Link>
        <hr />
        <Link href="/stories/clockmakerscurse/chapter4" className="link">
          Chapter 4: The Call
        </Link>
        <hr />
        <Link href="/stories/clockmakerscurse/chapter5" className="link">
          Chapter 5: The Clock&apos;s Toll<br />
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
        <p style={{ color: "#999" }}>970x250 Ad Placeholder</p>
      </div>
    </div>
  );
}

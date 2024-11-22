"use client";

import Link from 'next/link';

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
      <h1>The Clockmaker&apos;s Curse</h1>
      
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
         
      {/* Main Content */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
<p>When journalist Amelia Carter returns to the quaint coastal town of Havensbrook, she hopes to quietly settle her late uncle&apos;s estate and leave her past behind. But the town&apos;s iconic clock tower hides more than just its timeless chimes – it holds the key to a mystery that has haunted Havensbrook for decades.</p>
<p>As Amelia delves into her uncle&apos;s belongings, she uncovers cryptic clues that point to a sinister truth buried deep within the town&apos;s history. Secrets long thought forgotten begin to resurface, and powerful forces will do anything to keep them hidden. Caught in a dangerous game of deception and betrayal, Amelia must confront her own fears and uncover the truth before time runs out.</p>
<p>The Clockmaker&apos;s Curse is a suspenseful and atmospheric thriller that will keep you turning pages long into the night.</p>
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

      <h2>List of Chapters</h2>
      <Link href="/clockmakerscurse/chapter1/page" className="link"><b>Chapter 1</b></Link>
      
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

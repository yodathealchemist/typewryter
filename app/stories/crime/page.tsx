"use client";

import FeedbackForm from "@/lib/FeedbackForm";

export default function CrimeStory() {
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
      <h1>The Clockmaker’s Curse The Clockmaker&apos;s Curse</h1>

      {/* Advertisement Placeholder */}
      <div
        style={{
          width: "80%",
          height: "200px",
          backgroundColor: "#f0f0f0",
          border: "2px dashed #ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <p style={{ color: "#999" }}>Advertisement Placeholder</p>
      </div>

<p>When journalist Amelia Carter returns to the quaint coastal town of Havensbrook, she hopes to quietly settle her late uncle’s estate and leave her past behind. But the town’s iconic clock tower hides more than just its timeless chimes—it holds the key to a mystery that has haunted Havensbrook for decades.</p>
<p>As Amelia delves into her uncle’s belongings, she uncovers cryptic clues that point to a sinister truth buried deep within the town’s history. Secrets long thought forgotten begin to resurface, and powerful forces will do anything to keep them hidden. Caught in a dangerous game of deception and betrayal, Amelia must confront her own fears and uncover the truth before time runs out.</p>
<p>The Clockmaker’s Curse is a suspenseful and atmospheric thriller that will keep you turning pages long into the night.</p>

      {/* Include Feedback Form */}
      <FeedbackForm story="crime" chapter="chapter0" />

      {/* Advertisement Placeholder */}
      <div
        style={{
          width: "80%",
          height: "400px",
          backgroundColor: "#f0f0f0",
          border: "2px dashed #ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <p style={{ color: "#999" }}>Advertisement Placeholder</p>
      </div>
    </div>
  );
}

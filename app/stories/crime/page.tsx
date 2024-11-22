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
      <h1>Crime Story</h1>

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

      <p>Unravel the mystery.</p>

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

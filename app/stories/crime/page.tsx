"use client";

export default function CrimeStory() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = e.currentTarget.feedback.value;

    const response = await fetch("/api/submitComment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        story: "crime",
        chapter: "chapter0",
        comment,
      }),
    });

    if (response.ok) {
      alert("Your comment has been submitted!");
      (e.target as HTMLFormElement).reset(); // Explicitly tell TypeScript it's a form
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

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
      <p>Unravel the mystery.</p>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <label
          htmlFor="feedback"
          style={{ display: "block", marginBottom: "10px" }}
        >
          Share your ideas to shape the story:
        </label>
        <textarea
          id="feedback"
          name="feedback"
          rows={4}
          style={{
            width: "100%",
            marginTop: "10px",
            display: "block",
            marginBottom: "10px",
          }}
          required
        ></textarea>
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

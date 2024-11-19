"use client";

export default function FantasyStory() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = e.currentTarget.feedback.value;

    const response = await fetch("/api/submitComment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        story: "fantasy",
        chapter: "chapter1",
        comment,
      }),
    });

    if (response.ok) {
      alert("Your comment has been submitted!");
    } else {
      alert("Something went wrong. Please try again.");
    }

    e.currentTarget.reset();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fantasy Story</h1>
      <p>Step into a world of magic, mystery, and wonder. Share your ideas below!</p>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <label htmlFor="feedback">Your Suggestions:</label>
        <textarea
          id="feedback"
          name="feedback"
          rows={4}
          style={{ width: "100%", marginTop: "10px" }}
          required
        ></textarea>
        <button type="submit" style={{ marginTop: "10px" }}>Submit</button>
      </form>
    </div>
  );
}

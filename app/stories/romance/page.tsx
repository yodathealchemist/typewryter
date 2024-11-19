"use client";

export default function RomanceStory() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = e.currentTarget.feedback.value;

    const response = await fetch("/api/submitComment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        story: "romance",
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
      <h1>Romance Story</h1>


      {/* Advertisement Placeholder*/}
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
      
      <p>Feel the emotions, dive into the drama.</p>
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

            {/* Advertisement Placeholder*/}
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

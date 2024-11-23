import React from "react";

export default function FeedbackForm({ story, chapter }: { story: string; chapter: string }) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = e.currentTarget.feedback.value;

    const response = await fetch("/api/submitComment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        story,
        chapter,
        comment,
      }),
    });

    if (response.ok) {
      alert("Your comment has been submitted!");
      (e.target as HTMLFormElement).reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="feedback-form"
    >
      <label htmlFor="feedback" className="feedback-label">
        Share your ideas to shape the story:
      </label>
      <textarea
        id="feedback"
        name="feedback"
        rows={8}
        className="feedback-textarea"
        required
      ></textarea>
      <button type="submit" className="feedback-button">
        Submit
      </button>
    </form>
  );
}

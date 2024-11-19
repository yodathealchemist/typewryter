export default function CrimeStory() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Crime Mystery</h1>
      <p>
        A dark and stormy night, a missing heirloom, and a detective who won&apos;t
        stop until the truth is uncovered. Can you help solve the case?
      </p>
      <p>
        Chapter 1: Coming Soon... Share your thoughts on how this mystery
        unfolds!
      </p>
      <form style={{ marginTop: "20px" }}>
        <label htmlFor="feedback">Your Suggestions:</label>
        <br />
        <textarea
          id="feedback"
          rows={4} // Changed to number
          style={{ width: "100%", marginTop: "10px" }}
          placeholder="What twists and turns should this mystery take?"
        ></textarea>
        <br />
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}


const handleSubmit = async (e) => {
  e.preventDefault();
  const comment = e.target.feedback.value;

  const response = await fetch('/api/submitComment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      story: 'fantasy', // Adjust this for each story
      chapter: 'chapter1', // Adjust this for each chapter
      comment,
    }),
  });

  if (response.ok) {
    alert('Your comment has been submitted!');
  } else {
    alert('Something went wrong. Please try again.');
  }

  e.target.reset();
};

return (
  <form onSubmit={handleSubmit}>
    <textarea id="feedback" name="feedback" rows={4} required />
    <button type="submit">Submit</button>
  </form>
);

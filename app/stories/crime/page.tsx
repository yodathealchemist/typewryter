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

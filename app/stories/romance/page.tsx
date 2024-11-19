export default function RomanceStory() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Romance Drama</h1>
      <p>
        Two souls cross paths in the most unexpected way, but fate has its own
        plans. Will their love triumph over challenges, or will it shatter like
        glass?
      </p>
      <p>
        Chapter 1: Coming Soon... Tell us how you think this love story should
        unfold!
      </p>
      <form style={{ marginTop: "20px" }}>
        <label htmlFor="feedback">Your Suggestions:</label>
        <br />
        <textarea
          id="feedback"
          rows="4"
          style={{ width: "100%", marginTop: "10px" }}
          placeholder="What twists and emotions should this story explore?"
        ></textarea>
        <br />
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

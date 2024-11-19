export default function FantasyStory() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Fantasy Story</h1>
      <p>
        Step into a world of magic, mystery, and wonder. The winds whisper of
        ancient prophecies and hidden powers waiting to be discovered.
      </p>
      <p>
        Chapter 1: Coming Soon... Stay tuned for an enchanting journey where
        your ideas shape the story!
      </p>
      <form style={{ marginTop: "20px" }}>
        <label htmlFor="feedback">Your Suggestions:</label>
        <br />
        <textarea
          id="feedback"
          rows="4"
          style={{ width: "100%", marginTop: "10px" }}
          placeholder="What would you like to see in this fantasy world?"
        ></textarea>
        <br />
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

import pool from "../../../lib/db";

export async function POST(req) {
  const { story, chapter, comment } = await req.json();

  try {
    // Generate the current timestamp manually
    const timestamp = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

    // Insert the comment along with the timestamp
    const result = await pool.query(
      `INSERT INTO comments (story, chapter, comment, timestamp) VALUES ($1, $2, $3, $4) RETURNING *`,
      [story, chapter, comment, timestamp]
    );

    return new Response(JSON.stringify(result.rows[0]), { status: 200 });
  } catch (error) {
    console.error("Error saving comment:", error);
    return new Response(
      JSON.stringify({ message: "Failed to save comment." }),
      { status: 500 }
    );
  }
}

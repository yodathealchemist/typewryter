import pool from '../../../lib/db';

export async function POST(req) {
  const { story, chapter, comment } = await req.json();

  try {
    // Insert the comment into the database
    const result = await pool.query(
      'INSERT INTO comments (story, chapter, comment) VALUES ($1, $2, $3) RETURNING *',
      [story, chapter, comment]
    );

    return new Response(JSON.stringify(result.rows[0]), { status: 200 });
  } catch (error) {
    console.error('Error saving comment:', error);
    return new Response(
      JSON.stringify({ message: 'Failed to save comment.' }),
      { status: 500 }
    );
  }
}

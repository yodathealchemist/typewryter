import fs from "fs";
import path from "path";

export async function POST(req) {
  const { story, chapter, comment } = await req.json();

  // Define the file path
  const filePath = path.join(process.cwd(), "comments", `${story}-${chapter}.txt`);

  // Format the comment
  const formattedComment = `Comment: ${comment}\nTimestamp: ${new Date().toISOString()}\n\n`;

  // Ensure the comments folder exists
  if (!fs.existsSync(path.join(process.cwd(), "comments"))) {
    fs.mkdirSync(path.join(process.cwd(), "comments"));
  }

  // Write the comment to the file
  fs.appendFileSync(filePath, formattedComment, "utf8");

  return new Response(JSON.stringify({ message: "Comment saved successfully!" }), {
    status: 200,
  });
}

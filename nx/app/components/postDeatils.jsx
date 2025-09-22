
import Link from "next/link";

export default async function PostDeatils() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 120 }
  });
  const posts = await res.json();

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      justifyContent: "center",
      alignItems: "center",        
    }}>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <div style={{
            border: "1px solid #ccc",
            padding: "1rem",
            margin: "1rem 0",
            backgroundColor: "#f9f9f9",
            color: "#333"
          }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
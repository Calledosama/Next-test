import Link from "next/link";

export default async function Post({ params }){
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const PostId = params.PostId
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${PostId}`,{
    next: {revalidate: 120}
  });
  const Post = await res.json();

  return (
    <div>
      <h1>Post {params.PostId}</h1>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          margin: "1rem 0",
          backgroundColor: "#f9f9f9",
          color: "#333"
        }}
        >
        <h2>{Post.title}</h2>
        <p>{Post.body}</p>
        <p>{Post.id}</p>
      <Link href="/posts">Back to Posts</Link>
      </div>
    </div>
    
  )
}
import { Suspense } from "react";
import PostDeatils from "../components/postDeatils";

export default function PostsPage() {
  const LoadingJSX = (
    <div>
      <h1>Loading...</h1>
    </div>
  )
  return (
    <div>
      <h1>Posts Page</h1>
        <Suspense fallback={LoadingJSX}>
        <PostDeatils />
      </Suspense>
    </div>
  );
}
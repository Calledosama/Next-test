
export const metadata = {
  title: "Art Page",
  description: "This is the art page",
}

export default function ArtPage({ params }) {
  return (
    <div>
      <h1>Art Title: {params.title}</h1>
    </div>
  );
}
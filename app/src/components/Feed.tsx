import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/feed.json");
        if (!res.ok) {
          throw new Error(`Failed to load feed (status ${res.status})`);
        }
        const data: Post[] = await res.json();
        setPosts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return <p className="feed-status">Loading feed…</p>;
  }

  if (error) {
    return <p className="feed-status error">Error: {error}</p>;
  }

  if (posts.length === 0) {
    return <p className="feed-status">No posts found.</p>;
  }

  return (
    <div className="feed">
      {posts.map((p) => (
        <article key={p.id} className="post-card">
          <h2 className="post-title">{p.title}</h2>
          <p className="post-body">{p.body}</p>
        </article>
      ))}
    </div>
  );
}

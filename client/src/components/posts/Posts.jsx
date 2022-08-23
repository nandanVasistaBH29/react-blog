import Post from "../post/Post";
import "./Posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
}

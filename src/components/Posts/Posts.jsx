import { useSelector } from "react-redux";
import { selectorPosts } from "../../redux/selectors";

export default function Posts() {
  const posts = useSelector(selectorPosts);

  if (!Array.isArray(posts)) {
    // Return null or some other fallback UI if posts isn't an array
    return <p>No posts available</p>;
  }

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {post.avatar && <img src={post.avatar} alt={post.title} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useSelector } from "react-redux";
import { selectorPosts } from "../../redux/selectors";
import css from "./Posts.module.css";

export default function Posts() {
  const posts = useSelector(selectorPosts);

  if (!Array.isArray(posts)) {
    // Return null or some other fallback UI if posts isn't an array
    return <p>No posts available</p>;
  }

  return (
    <div className={css.postsBlock}>
      <ul className={css.listPost}>
        {posts.map((post) => (
          <li key={post.id} className={css.itemPost}>
            <h2 className={css.titlePost}>{post.title}</h2>
            <p className={css.bodyPost}>{post.body}</p>
            {post.avatar && (
              <img
                src={post.avatar}
                alt={post.title}
                className={css.imagePost}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

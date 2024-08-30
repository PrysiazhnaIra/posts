import { useDispatch, useSelector } from "react-redux";
import { selectorPosts } from "../../redux/selectors";
import css from "./Posts.module.css";
import { deleteTodoThunk } from "../../redux/operations";

export default function Posts() {
  const posts = useSelector(selectorPosts);
  const dispatch = useDispatch();

  const DEFAULT_AVATAR_URL = "/photo.png";

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
                src={post.avatar || DEFAULT_AVATAR_URL}
                alt={post.title}
                className={css.imagePost}
              />
            )}
            <button
              onClick={() => dispatch(deleteTodoThunk(post.id))}
              className={css.btnDlt}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { blogs } from "../blogData/data";
import { Link } from "react-router-dom";
function BlogPage() {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPage;

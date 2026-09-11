import { blogs } from "../blogData/data";
import { useParams } from "react-router-dom";

function BlogPostPage() {
  const { slug } = useParams();
  const blog = blogs.find((blog) => blog.slug === slug);
  if (!blog) {
    return <h2>Post not found</h2>;
  }

  return (
    <div className="blog-post-page">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogPostPage;

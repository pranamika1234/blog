import Blog from "../src/components/Blog";
import { resolveComponent } from "../src/utils/resolveComponent";

export default function BlogPage() {
  const BlogComponent = resolveComponent(Blog);
  return BlogComponent ? <BlogComponent /> : null;
}

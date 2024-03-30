import Blog from "../components/Blog";
import Preloader from "../components/Preloader";
import { useBlogsData } from "../hooks/useBlogsData";

const Blogs = () => {
  const { isLoading, data, isError, error, isSuccess } = useBlogsData();

  return (
    <div className="relative bg-gray-50 px-4 sm:px-6 py-8 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-semibold text-gray-900 sm:text-4xl">
            Travel Blogs
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Read the blogs to learn more and make your travel easy peasy.
          </p>
        </div>
        {isLoading && <Preloader />}
        {isSuccess && (
          <div className="mt-12 container mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
            {data.allblogs.map((blog) => (
              <Blog key={blog.blog_id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Blogs;

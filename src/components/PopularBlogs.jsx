import {useBlogsData} from '../hooks/useBlogsData';
import Blog from './Blog';

const PopularBlogs = () => {
    const {isLoading, data, isError, error, isSuccess} = useBlogsData();

    // const allBlogs = blogs.filter(blog => blog.user_rating > 3).slice(0,4);

    return (
        <div className="container mx-auto py-10">
            {
              isLoading && (<div>Loading...</div>)
            }
            {
                isSuccess && (
                    <div className="px-5 py-9">
                        <div className="space-y-3 text-center mb-10">
                          <span className="typography-caption text-xl">Travel Experiences</span>
                          <h2 className="text-4xl font-medium text-gray-900 text-center typography-heading">Latest Blogs</h2>
                          <p>Read the blogs of popular spots from our beloved clients.</p>
                        </div>
                        <div className="space-y-8 md:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 md:gap-y-5">
                            {data.allblogs.slice(0,3).map((blog) => (
                              <Blog key={blog.blog_id} blog={blog} />
                            ))}

                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default PopularBlogs ;

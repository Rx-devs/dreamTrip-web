import {
  useQuery,
  useQueryClient
} from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {fetchBlogs} from '../services/fetchers/blogs';
import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const PopularBlogs = () => {
    const {isError, isSuccess, isLoading, data, error} = useQuery(
      ["blogs"],
      fetchBlogs,
      // {staleTime: 3000}
    );

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
                          <h2 className="text-4xl font-medium text-gray-900 text-center typography-heading">Popular Blogs</h2>
                          <p>Read the blogs of popular spots from our beloved clients.</p>
                        </div>
                        <div className="space-y-8 md:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 md:gap-y-5">
                            {data.allblogs.map(({blog_id,images,sub_title,title}) => (
                                <div key={blog_id} className="group relative">
                                    <Link className="cursor-pointer" to={`/blogDetails/${blog_id}`}>
                                        <div className="shadow-md bg-white border border-gray-200 rounded-lg">
                                            <div className="relative w-full bg-white overflow-hidden group-hover:opacity-75 sm:h-50 rounded-t-lg">
                                                <img className="w-full h-full object-center object-cover" src={images.thumbnail} alt={images.alt} />
                                            </div>
                                            <div className="text-left p-5">
                                                <h5 className="text-gray-800 font-bold text-xl tracking-tight mb-2">{title}</h5>
                                                <div className="font-normal text-gray-500 mb-2">{sub_title}</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}

                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default PopularBlogs ;

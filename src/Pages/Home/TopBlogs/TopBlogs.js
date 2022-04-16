import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopBlogs = ({isLoading, setIsLoading}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allblogs`)
            .then(res => res.json())
			.then(data => {
                setBlogs(data.allblogs);
                setIsLoading(false);
			})
        
    }, []);

    const allBlogs = blogs.filter(blog => blog.user_rating > 4).slice(0,4);
    console.log(allBlogs);
    
    return (
        <div className="w-full py-16 sm:py-16 lg:py-10 lg:max-w-none ">
            {
                !isLoading && (
                    <div className="shadow-lg bg-gray-200 rounded-md px-5 py-9">
                        <h2 className="text-3xl font-medium text-gray-900">Top Rated Spots</h2>

                        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-x-6 lg:gap-y-6">
                            {allBlogs.map((blog) => (
                                <div key={blog.title} className="group relative ">
                                    <Link className="cursor-pointer" to={`/blogDetails/${blog._id}`}>
                                        <div className="shadow-md bg-white border border-gray-200 rounded-lg">
                                            <div className="relative w-full bg-white overflow-hidden group-hover:opacity-75 sm:h-50 rounded-t-lg">
                                                <img className="w-full h-full object-center object-cover" src={blog.thumbnail_url} alt="" />
                                            </div>
                                            <div className="text-left p-5">
                                                <h5 className="text-gray-800 font-bold text-xl tracking-tight mb-2">{blog.title}</h5>
                                                <p className="font-normal text-gray-500 mb-2">{blog.description.slice(0, 100)}...</p>
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

export default TopBlogs ;
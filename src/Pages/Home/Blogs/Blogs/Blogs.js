import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
        
    }, []);
    return (
        <div>
            <div  className="md:container md:mx-auto">
                <div className="bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                            <h2 className="text-2xl font-extrabold text-gray-900">Travel Blogs</h2>

                            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6">
                                {blogs.map((blog) => (
                                    <div key={blog.title} className="group relative">
										<div  className="shadow-md border border-gray-200 rounded-lg">
											<div  className="relative w-full h-80 bg-white overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 rounded-t-lg">
													<img  className="w-full h-full object-center object-cover" src={blog.thumbnail_url} alt=""/>
											</div>
											<div  className="text-left p-5">
														<h5  className="text-gray-800 font-bold text-xl tracking-tight mb-2">{blog.title}</h5>
													<p  className="font-normal text-gray-500 mb-2">{blog.description.slice(0,200)}...</p>
											</div>
											<div  className="px-5 flex items-center flex-wrap pb-4 mb-2 border-b-2 border-gray-100 mt-auto w-full">
												  <Link to={`/blogDetails/${blog.id}`}  className="text-indigo-500 inline-flex items-center">Learn More
													<svg  className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
													  <path d="M5 12h14"></path>
													  <path d="M12 5l7 7-7 7"></path>
													</svg>
												  </Link>
												  <span  className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
													<svg  className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
													  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
													  <circle cx="12" cy="12" r="3"></circle>
													</svg>1.2K
												  </span>
												  <span  className="text-gray-400 inline-flex items-center leading-none text-sm">
													<svg  className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
													  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
													</svg>6
												  </span>
												</div>
										</div>
                                    </div>									
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs ;
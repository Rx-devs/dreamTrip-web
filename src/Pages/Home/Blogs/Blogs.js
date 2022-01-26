import React, { useEffect, useState } from "react";
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
        
    }, []);
    return (
        <div>
            <div class="md:container md:mx-auto">
                <div className="bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                            <h2 className="text-2xl font-extrabold text-gray-900">Travel Blogs</h2>

                            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6">
                                {blogs.map((blog) => (
                                    <div key={blog.title} className="group relative">
                                        <div className="relative w-full h-80 bg-white shadow rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                            <img
                                                src={blog.thumbnail_url}
                                                alt={blog.title}
                                                className="w-full h-full object-center object-cover"
                                            />
                                        </div>
                                        <h3 className="mt-6 text-sm text-gray-500">
                                            <a href={blog.href}>
                                                <span className="absolute inset-0" />
                                                {blog.title}
                                            </a>
                                        </h3>
                                        <p className="text-base font-semibold text-gray-900">{blog.description.slice(0,300)}...</p>
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
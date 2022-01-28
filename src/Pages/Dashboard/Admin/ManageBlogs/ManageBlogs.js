import React, { useEffect, useState } from "react";

const ManageBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://polar-savannah-45678.herokuapp.com/allblogs')
            .then(res => res.json())
            .then(data => setBlogs(data.allblogs))
    }, []);

    return (
        <div>
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6">
                {
                    blogs.map(blog => (
                        <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                            <img class="rounded-t-lg h-60" src={blog.thumbnail_url} alt="" />
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">{blog.title}</h5>
                            <p class="text-gray-700 text-base mb-4">
                                {blog.description.slice(0,50)}..
                            </p>
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Delete Blog</button>
                        </div>
                    </div>
                </div>
                    ))
                }
                
            </div>
        </div>
    );
};

export default ManageBlogs ;
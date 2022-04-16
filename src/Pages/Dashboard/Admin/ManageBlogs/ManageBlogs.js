import React, { useEffect, useState } from "react";
import swal from 'sweetalert';

const ManageBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/allblogs')
            .then(res => res.json())
            .then(data => setBlogs(data.allblogs))
    }, [control]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/allblogs/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
                setConrol(!control);
                swal("Good job!", "Successfully Deleted!", "success");
            } else {
              setConrol(false);
            }
          });
        
    };
    
    return (
        <div className="px-5">
            <h2 className=" font-medium text-xl mt-5">Manage All Blogs</h2>
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6">
                
                {
                    blogs.map(blog => (
                        <div className="flex justify-center">
                            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                <img className="rounded-t-lg h-60" src={blog.thumbnail_url} alt="" />
                                <div className="p-6">
                                    <h5 className="text-gray-900 text-xl font-medium mb-2">{blog.title}</h5>
                                    <p className="text-gray-700 text-base mb-4">
                                        {blog.description.slice(0, 50)}..
                                    </p>
                                    <button onClick={() => handleDelete(blog._id)} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Delete Blog</button>
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
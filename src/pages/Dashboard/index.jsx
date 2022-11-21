import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
    const { user, admin } = useAuth();
    return (
        <div className="flex-none md:flex flex-row">
            <div className="flex px-5 flex-col md:h-screen p-3 w-full md:w-80 bg-white text-gray-800 border-2">
                <div className="space-y-3">
                    <div className="text-justify">
                        <h2 className="font-semibold text-2xl text-red-600">Dashboard</h2>
                        {/* <div className="inset-y-0 left-0 flex items-center">
                            <button class="p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    class="w-5 h-5 fill-current text-gray-800"
                                >
                                    <rect width="352" height="32" x="80" y="96"></rect>
                                    <rect width="352" height="32" x="80" y="240"></rect>
                                    <rect width="352" height="32" x="80" y="384"></rect>
                                </svg>
                            </button>
                        </div> */}
                    </div>
                    <div className="flex-1 sm:text-center ">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            {
                                admin && (
                                    <div>
                                        <li className="rounded-sm">
                                            <div className="flex items-center space-x-3 rounded-md">
                                                <Link className="px-3 py-2 rounded-md hover:bg-gray-800 hover:text-white font-medium text-base" to="/"> Home</Link>
                                            </div>
                                        </li>
                                        <li className="rounded-sm">
                                            <div className="flex items-center space-x-3 rounded-md">
                                                  
                                                <Link className="px-3 py-2 rounded-md hover:bg-gray-800 hover:text-white font-medium text-base" to={`/dashboard/addAdmin`}>Add Admin</Link>
                                            </div>
                                        </li>
                                        <li className="rounded-sm">
                                            <div className="flex items-center space-x-3 rounded-md">
                                                <Link className="px-3 py-2 rounded-md hover:bg-gray-800 hover:text-white font-medium text-base" to={`/dashboard/addBlog`}>Add Blog</Link>
                                            </div>
                                        </li>
                                        <li className="rounded-sm">
                                            <div className="flex items-center space-x-3 rounded-md">
                                                <Link className="px-3 py-2 rounded-md hover:bg-gray-800 hover:text-white font-medium text-base" to={`/dashboard/manageBlogs`}>Manage Blogs</Link>
                                            </div>
                                        </li>
                                        
                                    </div>
                                )
                            }

                            {
                                !admin && <div>
                                    <li className="rounded-sm">
                                        <div className="flex items-center space-x-3 rounded-md">
                                            <Link className="px-3 py-2 rounded-md hover:bg-gray-800 hover:text-white font-medium text-base" to="/"> Home</Link>
                                        </div>
                                    </li>
                                    <li className="rounded-sm">
                                        <div className="flex items-center space-x-3 rounded-md">
                                            <Link className="px-3 py-2 rounded-md hover:bg-gray-800 hover:text-white font-medium text-base" to={`/dashboard/createBlog`}>Create Blog</Link>
                                        </div>
                                    </li>
                                </div>
                            }
                            
                        </ul>
                    </div>
                </div>
                <div className="flex items-center p-2 mt-2 space-x-4 justify-self-end">
                    <img
                        src={user.photoURL}
                        alt=""
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h2 className="text-base font-semibold">{user.displayName}</h2>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="container py-3">
                    <div className="pt-6 pb-4">
                        <h1 className="font-medium text-xl md:text-3xl">Welcome To Your Dashboard</h1>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard ;
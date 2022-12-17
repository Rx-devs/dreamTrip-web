import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
    const { user, admin } = useAuth();
    return (
        <div className="flex-none md:flex flex-row bg-color-main">
            <div className="flex px-5 flex-col md:h-screen p-3 w-full md:w-80 text-gray-800 border-2">
                <div className="space-y-3 p-3">
                    <div className="text-justify">
                        <h2 className="font-medium text-2xl text-white">Dashboard</h2>
                    </div>
                    <div className="flex-1 sm:text-center">
                        <ul className="pt-2 pb-4 space-y-1 text-sm text-white">
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
                <div className="flex items-center p-2 mt-2 space-x-4 justify-self-end text-white">
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
                <div className="container h-screen bg-white">
                <div className="pt-6 pb-4">
                <h1 className="font-medium text-xl md:text-3xl text-center">Welcome To Your Dashboard</h1>
            </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
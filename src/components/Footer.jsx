import React from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6">
                            <div className="text-left">
                                <button className="text-xl font-bold text-gray-800   hover:text-gray-700 ">DreamTrip</button>
                                <p className="max-w-md mt-2 text-gray-500  ">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>
                            </div>
                            <div className="flex mt-4 -mx-2">
                                <button className="mx-2 text-gray-700  hover:text-gray-600 " aria-label="Linkden">
                                    <FaLinkedin className="w-5 h-5"/>
                                </button>

                                <button className="mx-2 text-gray-700  hover:text-gray-600 " aria-label="Facebook">
                                <FaFacebookSquare className="w-5 h-5"/>
                                </button>

                                <button className="mx-2 text-gray-700  hover:text-gray-600 " aria-label="Twitter">
                                    <FaTwitterSquare className="w-5 h-5"/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                            <div>
                                <h3 className="text-gray-700 uppercase  text-left ">About</h3>
                                <button className="block mt-2 text-sm text-gray-600   hover:underline">DreamTrip Dreams</button>
                                <button className="block mt-2 text-sm text-gray-600   hover:underline">Team Members</button>
                                <button className="block mt-2 text-sm text-gray-600   hover:underline">DestinyIsAll</button>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase  text-left ">Blog</h3>
                                <button className="block mt-2 text-sm text-gray-600   hover:underline">Top Blogs</button>
                                <button className="block mt-2 text-sm text-gray-600   hover:underline">New Blogs</button>
                                <button className="block mt-2 text-sm text-gray-600   hover:underline">Upcoming Blogs</button>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase text-left ">Services</h3>
                                <button className="block mt-2 text-sm text-gray-600   hover:underline">Road Trip</button>
                                <button className="block mt-2 text-sm text-gray-600   hover:underline">River Trip</button>
                                <button className="block mt-2 text-sm text-gray-600   hover:underline">Mountain Hills</button>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase ">Contact Us</h3>
                                <span className="block mt-2 text-sm text-gray-600   hover:underline">+1 526 654 8965</span>
                                <span className="block mt-2 text-sm text-gray-600   hover:underline">dreamTrip@email.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

                <div>
                    <p className="text-center text-gray-800 font-medium ">© DreamTrip 2022 - All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
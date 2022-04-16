import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import Footer from "../../../../Shared/Footer/Footer";
import Navigation from "../../../../Shared/Navigation/Navigation";

const BlogDetails = () => {
    const {blogId } = useParams();
    const { user } = useAuth();
    const [blog, setBlog] = useState({});
    
    // load blog
    useEffect(() => {
        fetch(`http://localhost:5000/allblogs/${blogId}`)
            .then(res => res.json())
            .then(data => setBlog(data))
        
    }, [blogId]);
    return (
        <div>
            <Navigation></Navigation>
            <div className="container px-12 md:px-6 py-10 md:py-20 mx-auto">
                <div className="flex flex-wrap">
                    <div className="relative w-full mx-auto bg-white overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-80 lg:aspect-w-1 lg:aspect-h-1 rounded-lg">
                        <img className="w-full h-full object-center object-cover" src={blog.thumbnail_url} alt="" />
                    </div>
                    <div className="py-12 md:w-full flex flex-col">
                        <div className="flex justify-between">
                            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{blog.category}</span>
                            <span className="title-font font-medium text-gray-900">Location: {blog.travel_location}</span>
                        </div>
                        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 text-left">{blog.title}</h2>
                        <p className="leading-relaxed mb-6 text-left">{blog.description}</p>
                        <div className="flex justify-between items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                            <div className="text-gray-900 inline-flex items-center">Travel Cost: ${blog.travel_cost}
                            </div>
                            <div> <span className="mr-2">User Rating:</span>
                                <Rating
                                    initialRating={blog?.user_rating}
                                    emptySymbol="far fa-star text-yellow-400"
                                    fullSymbol="fas fa-star text-yellow-400"
                                    readonly />
                            </div>
                        </div>
                        <div className="flex w-100 justify-between items-center">
                            <div className="inline-flex items-center">
                                <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">{blog.traveler_name}</span>
                                    <span className="text-gray-400 text-xs tracking-widest mt-0.5">A traveler</span>
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold title-font text-gray-700">Date: 12 Jun 2019</span>
                                <span className="mt-1 text-gray-500 text-sm">Time: 4 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
            
export default BlogDetails;

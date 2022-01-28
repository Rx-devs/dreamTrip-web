import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import TopBlogs from "../../TopBlogs/TopBlogs";
import './Blogs.css';

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [page, setPage] = useState(0);
	const size = 10;


    useEffect(() => {
        fetch(`https://polar-savannah-45678.herokuapp.com/allblogs?page=${page}&&size=${size}`)
            .then(res => res.json())
			.then(data => {
				setBlogs(data.allblogs)
				const count = data.count;
				const pageNumber = Math.ceil(count / size);
				setPageCount(pageNumber);
			})
        
	}, [page]);
	
	return (
		<div>
			<div className="md:container md:mx-auto">
				<div className="bg-gray-100">
				
					<div className="flex-none md:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
						<div className="sm:w-full md:w-2/5 md:mr-5">
							<TopBlogs></TopBlogs>
						</div>
						<div className="w-full py-16 sm:py-16 lg:py-20 lg:max-w-none">
							<h2 className="text-2xl font-extrabold text-gray-900">Travel Blogs</h2>

							<div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6">
								{blogs.map((blog) => (
									<div key={blog.title} className="group relative">
										<div className="shadow-md border border-gray-200 rounded-lg">
											<div className="relative w-full h-80 bg-white overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 rounded-t-lg">
												<img className="w-full h-full object-center object-cover" src={blog.thumbnail_url} alt="" />
											</div>
											<div className="text-left p-5">
												<h5 className="text-gray-800 font-bold text-xl tracking-tight mb-2">{blog.title}</h5>
												<p className="font-normal text-gray-500 mb-2">{blog.description.slice(0, 250)}...</p>
											</div>
											<div className="px-5 flex justify-between items-center flex-wrap pb-4 mb-2 border-b-2 border-gray-100 mt-auto w-full">
												<Link to={`/blogDetails/${blog._id}`} className="text-indigo-500 inline-flex items-center">Learn More
													<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
														<path d="M5 12h14"></path>
														<path d="M12 5l7 7-7 7"></path>
													</svg>
												</Link>
												<Rating
													initialRating={blog?.user_rating}
													emptySymbol="far fa-star text-yellow-400"
													fullSymbol="fas fa-star text-yellow-400"
													readonly />
											</div>
										</div>
									</div>
								))}
								
							</div>
							<div className="pagination">
								<span className="py-1.5 px-3  border-0 bg-transparent outline-none rounded text-gray-800" aria-hidden="true">&laquo;</span>
								{
									[...Array(pageCount).keys()].map(number => <button
										className={number === page ? 'selected' : ''}
										key={number}
										onClick={() => setPage(number)}
									>{number + 1}</button>)
								}
								<span className="py-1.5 px-3  border-0 bg-transparent outline-none rounded text-gray-800" aria-hidden="true">&raquo;</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs ;
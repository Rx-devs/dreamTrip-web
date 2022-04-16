import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import TopBlogs from "../../TopBlogs/TopBlogs";
import './Blogs.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


const Blogs = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [blogs, setBlogs] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [page, setPage] = useState(0);
	const size = 10;


    useEffect(() => {
        fetch(`http://localhost:5000/allblogs?page=${page}&&size=${size}`)
            .then(res => res.json())
			.then(data => {
				setBlogs(data.allblogs)
				const count = data.count;
				const pageNumber = Math.ceil(count / size);
				setPageCount(pageNumber);
				setIsLoading(false);
			})
        
	}, [page]);
	return (
		<div>
			<div className="md:container md:mx-auto">
				<div className="bg-gray-100">
					{
						isLoading && <div className="my-10">
							<ClipLoader css={override} size={100} />
						</div>
					}
					<div className="flex-none px-4 mx-auto md:flex max-w-7xl sm:px-6 lg:px-6">
						<div className="sm:w-full md:w-2/5 md:mr-5">
							<TopBlogs isLoading={isLoading} setIsLoading={setIsLoading}></TopBlogs>
						</div>
						{
							!isLoading && (
								<div className="w-full py-16 sm:py-16 lg:py-20 lg:max-w-none">
									<h2 className="text-3xl font-medium text-gray-900">All Blogs</h2>
									<div className="p-3 mt-6 space-y-10 md:p-0 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6">
										{blogs.map((blog) => (
											<div key={blog.title} className="relative group">
												<div className="border border-gray-200 rounded-lg shadow-md">
													<div className="relative w-full overflow-hidden bg-white rounded-t-lg h-80 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
														<img className="object-cover object-center w-full h-full" src={blog.thumbnail_url} alt="" />
													</div>
													<div className="p-5 text-left">
														<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">{blog.title}</h5>
														<p className="mb-2 font-normal text-gray-500">{blog.description.slice(0, 250)}...</p>
													</div>
													<div className="flex flex-wrap items-center justify-between w-full px-5 pb-2 mt-auto mb-2 border-b-2 border-gray-100">
														<Link to={`/blogDetails/${blog._id}`} className="inline-flex items-center px-3 py-2 text-red-600 rounded-md hover:bg-red-600 hover:text-white">Learn More
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
							)
						}
								
					</div>
						
				</div>
			</div>
		</div>
	);
};

export default Blogs ;
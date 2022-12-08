import {
  useQuery,
  useQueryClient
} from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {fetchBlogs} from '../services/fetchers/blogs';
import { CircularProgress, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout"

const Blogs = () => {
	// const [isLoading, setIsLoading] = useState(false);
	// const [blogs, setBlogs] = useState([]);
	// const [pageCount, setPageCount] = useState(0);
	// const [page, setPage] = useState(0);
	// const size = 10;

	const {isError, isSuccess, isLoading, data, error} = useQuery(
		["blogs"],
		fetchBlogs,
		// {staleTime: 3000}
	);

	// useEffect(() => {
	// 	setIsLoading(true);
  //       fetch(`${import.meta.env.VITE_SERVER_URL}/api/blogs?page=${page}&&size=${size}`)
  //           .then(res => res.json())
	// 		.then(data => {
	// 			setBlogs(data.allblogs);
	// 			const count = data.count;
	// 			const pageNumber = Math.ceil(count / size);
	// 			setPageCount(pageNumber);
	// 			setIsLoading(false);
	// 		})
  //
	// }, [page,setIsLoading]);
	return (
		<div>
			<Layout>
			<div className="md:container md:mx-auto h-100vh">
				<div className="bg-gray-100">
					{
						isLoading && <div className="my-10">
							<CircularProgress />
						</div>
					}
					<div className="flex-none md:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
						{
							isSuccess && (
								<div className="w-full py-16 sm:py-16 lg:py-20 lg:max-w-none">
									<h2 className="text-3xl font-medium text-gray-900">All Blogs</h2>
									<div className="mt-6 p-3 md:p-0 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6">
										{data.allblogs.map((blog) => (
											<div key={blog.blog_id} className="group relative">
												<div className="shadow-md border border-gray-200 rounded-lg">
													<div className="relative w-full h-80 bg-white overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 rounded-t-lg">
														<img className="w-full h-full object-center object-cover" src={blog.images.thumbnail} alt="" />
													</div>
													<div className="text-left p-5">
														<h5 className="text-gray-800 font-bold text-xl tracking-tight mb-2">{blog.title}</h5>
														<p className="font-normal text-gray-500 mb-2">{blog.sub_title}...</p>
													</div>
													<div className="px-5 flex justify-between items-center flex-wrap pb-2 mb-2 border-b-2 border-gray-100 mt-auto w-full">
														<Link to={`/blogDetails/${blog.blog_id}`} className="text-red-600 inline-flex items-center px-3 py-2 rounded-md hover:bg-red-600 hover:text-white">Learn More
															<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
																<path d="M5 12h14"></path>
																<path d="M12 5l7 7-7 7"></path>
															</svg>
														</Link>
														<Rating name="simple-controlled" defaultValue={blog?.user_rating} precision={0.1} readOnly />
													</div>
												</div>
											</div>
										))}

									</div>
									{/* <div className="pagination">
										<span className="py-1.5 px-3  border-0 bg-transparent outline-none rounded text-gray-800" aria-hidden="true">&laquo;</span>
										{
											[...Array(pageCount).keys()].map(number => <button
												className={number === page ? 'selected' : ''}
												key={number}
												onClick={() => setPage(number)}
											>{number + 1}</button>)
										}
										<span className="py-1.5 px-3  border-0 bg-transparent outline-none rounded text-gray-800" aria-hidden="true">&raquo;</span>
									</div> */}
								</div>
							)
						}

					</div>

				</div>
			</div>
		</Layout>
		</div>
	);
};

export default Blogs ;

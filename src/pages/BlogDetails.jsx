import {
  useQuery,
  useQueryClient
} from "@tanstack/react-query";
import Preloader from '../components/Preloader';
import {useBlogData} from '../hooks/useBlogData';
import Rating from '@mui/material/Rating';
import { useParams } from "react-router-dom";
import Layout from "../layouts/Layout";
import parse from 'html-react-parser';

const BlogDetails = () => {
    const {blogId } = useParams();
    const {isLoading, data, isError, error, isSuccess} = useBlogData(blogId);

    // const { user } = useAuth();
    return (
        <div>
            <Layout>
              {
                isLoading && (<Preloader/>)
              }

              {
                  isSuccess && (
                      <div className="container px-12 md:px-6 py-2 md:py-4 mx-auto">
                        <div className="flex flex-wrap">
                          <div className="relative w-full mx-auto bg-white overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-80 lg:aspect-w-1 lg:aspect-h-1 rounded-lg">
                            <img className="w-full h-full object-center object-cover" src={data.images.thumbnail} alt="" />
                          </div>
                          <div className="py-12 md:w-full flex flex-col">
                            <div className="flex justify-between">
                              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">...</span>
                              <span className="title-font font-medium text-gray-900">Location: ...</span>
                            </div>
                            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 text-left">{data.title}</h2>
                            <div className="text-base article-text-color">
                              <div className="text-xl">{parse(`${data.description}`)}</div>
                            </div>
                            {/* <div className="flex justify-between items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                              <div className="text-gray-900 inline-flex items-center">Travel Cost: ....
                              </div>
                              <div> <span className="mr-2">User Rating:</span>
                              <Rating name="simple-controlled" defaultValue={5} precision={0.1} readOnly />
                            </div>
                          </div> */}
                          <div className="flex mt-5 w-100 justify-between items-center">
                            <div className="inline-flex items-center">
                              <img alt="blog" src={data.author.profile_img} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                              <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium text-gray-900">{data.author.name}</span>
                                <span className="text-gray-400 text-xs tracking-widest mt-0.5">A traveler</span>
                              </span>
                            </div>
                            <div className="">
                              <span className="text-gray-700"> {data.published_at}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    )
              }
            </Layout>
        </div>
    );
};

export default BlogDetails;

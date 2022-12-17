import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import { BsArrowRightSquare } from 'react-icons/bs';
import { CgComment } from 'react-icons/cg';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { blog_id, images, title, sub_title, author, published_at, reading_time } = blog;
  return (
    <>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <LazyLoadImage
            src={images.thumbnail}
            className="h-48 w-full object-cover"
            alt="Article thumbnail"
            effect="blur"
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="flex items-center justify-between pb-2 overflow-hidden">
              <p className="text-sm font-medium color-main">
                Travel Guide
              </p>
              <div className="flex flex-row items-center">
                <div className="text-xs font-medium text-gray-500 flex flex-row items-center mr-2">
                  <AiOutlineEye className="w-4 h-4 mr-1" />
                  <span>1.5k</span>
                </div>

                <div className="text-xs font-medium text-gray-500 flex flex-row items-center mr-2">
                  <CgComment className="w-4 h-4 mr-1" />
                  <span>25</span>
                </div>

                <div className="text-xs font-medium text-gray-500 flex flex-row items-center">
                  <AiOutlineHeart className="w-4 h-4 mr-1" />
                  <span>7</span>
                </div>
              </div>
            </div>
            
              <div className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">{title}</p>
                <p className="mt-3 text-base text-gray-500">{sub_title}</p>
            </div>
            <div className='pb-4 mt-2'>
            <Link className="cursor-pointer flex items-center" to={`/blogDetails/${blog_id}`}>
                <span className='font-medium'>
                  Read more 
                </span>
                <BsArrowRightSquare className='text-xl ml-1 bg-color-main text-white'/>
              </Link>
              </div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col justify-between items-start sm:items-center md:items-start gap-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div>
                  <span className="sr-only">{author.name}</span>
                  <LazyLoadImage
                    src={author.profile_img}
                    className="h-10 w-10 rounded-full"
                    alt="Auther Profile"
                    effect="blur"
                  />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {author.name}
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <span>{published_at}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{reading_time} read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;

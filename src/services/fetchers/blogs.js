import axios from "axios";
import { serverBaseURL } from "../../utility/getURL";

export const fetchBlogs = async () => {
  // console.log('fetchBlogs..');
  const res = await axios.get(`${serverBaseURL}/api/blogs`);
  const blogs = res.data;

  // console.log('Blogs', blogs);
  return blogs;
};

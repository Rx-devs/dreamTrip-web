import {
  useQuery
} from "@tanstack/react-query";
import axios from 'axios';

const apiURL = (import.meta.env.VITE_SERVER_URL) ? import.meta.env.VITE_SERVER_URL : 'https://dream-trip-api.cyclic.app';

const fetchBlog = async (blogId) => {
  const res = await axios.get(`${apiURL}/api/blogs/${blogId}`);
  return res.data;
}

export const useBlogData = (blogId) => {
  return useQuery(['blog', blogId], () => fetchBlog(blogId));
}

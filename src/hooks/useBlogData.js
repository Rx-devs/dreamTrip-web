import {
  useQuery,
  useQueryClient
} from "@tanstack/react-query";
import axios from 'axios';

const fetchBlog = async (blogId) => {
  const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/blogs/${blogId}`);
  return res.data;
}

export const useBlogData = (blogId) => {
  return useQuery(['blog', blogId], () => fetchBlog(blogId));
}

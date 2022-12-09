import {
  useQuery,
  useQueryClient
} from "@tanstack/react-query";
import axios from 'axios';

const fetchBlogs = async () => {
  const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/blogs`);
  console.log('fetchBlogs..');
  return res.data;
}

export const useBlogsData = () => {
  return useQuery(['blogs'], () => fetchBlogs());
}

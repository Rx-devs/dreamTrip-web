import axios from 'axios';

const apiURL = (import.meta.env.VITE_SERVER_URL) ? import.meta.env.VITE_SERVER_URL : 'https://dream-trip-api.cyclic.app';

export const fetchBlogs =  async () => {
  // console.log('fetchBlogs..');
  const res = await axios.get(`${apiURL}/api/blogs`);
  const blogs = res.data;

  // console.log('Blogs', blogs);
  return blogs;
}

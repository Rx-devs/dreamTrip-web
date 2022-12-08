import axios from 'axios';

export const fetchBlogs =  async () => {
  console.log('fetchBlogs..');
  const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/blogs`);
  const blogs = res.data;

  console.log('Blogs', blogs);
  return blogs;
}

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { serverBaseURL } from "../utility/getURL";

const fetchBlog = async (blogId) => {
  const res = await axios.get(`${serverBaseURL}/api/blogs/${blogId}`);
  return res.data;
};

export const useBlogData = (blogId) => {
  return useQuery(["blog", blogId], () => fetchBlog(blogId));
};

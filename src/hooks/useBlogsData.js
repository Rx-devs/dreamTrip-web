import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { serverBaseURL } from "../utility/getURL";

const fetchBlogs = async () => {
  const res = await axios.get(`${serverBaseURL}/api/blogs`);
  return res.data;
};

export const useBlogsData = () => {
  return useQuery(["blogs"], () => fetchBlogs());
};

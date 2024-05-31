import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { serverBaseURL } from "../utility/getURL";

const fetchDestinations = async () => {
  const res = await axios.get(`${serverBaseURL}/api/destinations`);
  return res.data;
};

export const useDestinationsData = () => {
  return useQuery(["destinations"], () => fetchDestinations());
};

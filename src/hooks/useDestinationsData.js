import {
  useQuery,
  useQueryClient
} from "@tanstack/react-query";
import axios from 'axios';

const fetchDestinations = async () => {
  const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/destinations`);
  return res.data;
}

export const useDestinationsData = () => {
  return useQuery(['destinations'], () => fetchDestinations());
}

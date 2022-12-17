import {
  useQuery
} from "@tanstack/react-query";
import axios from 'axios';

const apiURL = (import.meta.env.VITE_SERVER_URL) ? import.meta.env.VITE_SERVER_URL : 'https://dream-trip-api.cyclic.app';

const fetchDestinations = async () => {
  const res = await axios.get(`${apiURL}/api/destinations`);
  return res.data;
}

export const useDestinationsData = () => {
  return useQuery(['destinations'], () => fetchDestinations());
}

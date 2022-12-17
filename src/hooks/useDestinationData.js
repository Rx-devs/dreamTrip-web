import {
  useQuery
} from "@tanstack/react-query";
import axios from 'axios';

const apiURL = (import.meta.env.VITE_SERVER_URL) ? import.meta.env.VITE_SERVER_URL : 'https://dream-trip-api.cyclic.app';

const fetchDestination = async (destinationId) => {
  const res = await axios.get(`${apiURL}/api/destinations/${destinationId}`);
  console.log('fetch done')
  return res.data;
}

export const useDestinationData = (destinationId) => {
  console.log('query start');
  return useQuery(['destination', destinationId], () => fetchDestination(destinationId));
}

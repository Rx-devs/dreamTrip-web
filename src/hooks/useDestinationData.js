import {
  useQuery,
  useQueryClient
} from "@tanstack/react-query";
import axios from 'axios';

const fetchDestination = async (destinationId) => {
  const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/destinations/${destinationId}`);
  console.log('fetch done')
  return res.data;
}

export const useDestinationData = (destinationId) => {
  console.log('query start');
  return useQuery(['destination', destinationId], () => fetchDestination(destinationId));
}

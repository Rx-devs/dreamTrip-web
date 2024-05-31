import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { serverBaseURL } from "../utility/getURL";

const fetchDestination = async (destinationId) => {
  const res = await axios.get(
    `${serverBaseURL}/api/destinations/${destinationId}`
  );
  console.log("fetch done");
  return res.data;
};

export const useDestinationData = (destinationId) => {
  console.log("query start");
  return useQuery(["destination", destinationId], () =>
    fetchDestination(destinationId)
  );
};

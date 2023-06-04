import axios from "axios";
import { useQuery } from "react-query";
import { API_URL } from "./constants/serviceConstants";

export const useStatusService = () => {
  const getStatusService = async () => {
    const result = await axios.get(`${API_URL}/status`);
    return result.data;
  };
  const { isLoading, error, data } = useQuery("status", getStatusService);
  return { isLoading, error, data };
};

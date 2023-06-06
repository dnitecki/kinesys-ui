import axios from "axios";
import { API_URL } from "./constants/serviceConstants";

export const getOverviewService = async () => {
  const result = await axios.get(`${API_URL}/overview`).then((res) => res.data);
  return result.data;
};

export const getStatusService = async () => {
  const result = await axios.get(`${API_URL}/status`).then((res) => res.data);
  return result.data;
};

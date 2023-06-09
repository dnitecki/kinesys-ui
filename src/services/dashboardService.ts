import axios from "axios";
import { MOCK_API_URL } from "./constants/serviceConstants";

export const getOverviewService = async () => {
  const result = await axios
    .get(`${MOCK_API_URL}/overview`)
    .then((res) => res.data);
  return result.response;
};

export const getStatusService = async () => {
  const result = await axios
    .get(`${MOCK_API_URL}/status`)
    .then((res) => res.data);
  return result.data;
};

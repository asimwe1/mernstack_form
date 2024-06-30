import axios from "axios";

const apiUrl = "https://mernstack-manager.vercel.app/api";

const makeApiRequest = async (endpoint, options = {}) => {
  const url = `${apiUrl}/${endpoint}`;
  const response = await axios.request({
    url,
    ...options,
    headers: {
      ...options.headers,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export { apiUrl, makeApiRequest };
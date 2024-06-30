import axios from "axios";

// base API URL
const apiUrl = "https://mernstack-manager.vercel.app/api/v1/tasks";

// API requests
const makeApiRequest = async (endpoint, options = {}) => {
  const url = `${apiUrl}/${endpoint}`;

  try {
    const response = await axios.request({
      url,
      ...options,
      headers: {
        ...options.headers,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error.response ? error.response.data : new Error("API request failed");
  }
};

export { apiUrl, makeApiRequest };

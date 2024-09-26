import axios from "axios";

const API_URL = "http://localhost:3000"; // Change this to your server's URL

export const fetchStartups = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/startups`);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching startups:", error);
    throw error; // You can throw the error or handle it as needed
  }
};

export const createStartup = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/startups`, data);
    return response.data;
  } catch (error) {
    console.error("Error creating startup:", error);
    throw error;
  }
};

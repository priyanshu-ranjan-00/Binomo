import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchOrderBook = async () => {
  const response = await axios.get(`${API_URL}/orders`);
  return response.data;
};

export const fetchTradeHistory = async () => {
  const response = await axios.get(`${API_URL}/trades`);
  return response.data;
};

export const placeOrder = async (order) => {
  const response = await axios.post(`${API_URL}/orders`, order);
  return response.data;
};

export const createTrade = async (trade) => {
  const response = await axios.post(`${API_URL}/trades`, trade);
  return response.data;
};
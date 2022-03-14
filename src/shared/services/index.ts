import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const api = axios.create({
  baseURL: "http://192.168.0.121:3333/",
});

api.interceptors.request.use(async (config) => {
  const userToken = await AsyncStorage.getItem("token");

  if (userToken && config.headers) {
    const token = JSON.parse(userToken);
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

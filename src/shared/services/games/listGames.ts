import { Alert } from "react-native";
import { api } from "../api";

export const listGames = async() => {
  try {
    const response = await api.get("cart_games");
    return response;
  } catch (error) {
    Alert.alert(error instanceof Error ? error.message : "Unknown error occurred!")
  }
}
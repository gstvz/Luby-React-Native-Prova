import { Alert } from "react-native";
import { api } from "@shared/services";

export const listBet = async() => {
  try {
    const response = await api.get("/bet/all-bets");
    return response.data;
  } catch(error) {
    Alert.alert(error instanceof Error ? error.message : "Unknown error occurred!");
  }
}
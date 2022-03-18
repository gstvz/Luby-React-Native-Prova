import { Alert } from "react-native";
import { api } from "@shared/services";

export const listBet = async(params: string) => {
  try {
    const response = await api.get(`/bet/all-bets${params}`);
    return response.data;
  } catch(error) {
    Alert.alert(error instanceof Error ? error.message : "Unknown error occurred!");
  }
}
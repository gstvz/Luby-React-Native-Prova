import { Alert } from "react-native";
import { api } from "@shared/services";

export const listBet = async(params: string) => {
  try {
    const response = await api.get(`/bet/all-bets${params}`);
    return response.data;
  } catch(error) {
    Alert.alert("Recent Games", "Could not fetch user bets! Please, try reloading the screen!");
  }
}
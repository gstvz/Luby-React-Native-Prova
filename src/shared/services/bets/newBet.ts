import { api } from "@shared/services";
import { Bet } from "@shared/types/cart";
import { Alert } from "react-native";

type Games = {
  games: Bet[]
}

export const newBet = async (bets: Games) => {
  try {
    const response = await api
      .post("/bet/new-bet", bets)
      .then((res) => {
        Alert.alert("Save Bet", "Bet saved! 👌");
        return res;
      });

    return response;
  } catch (error) {
    Alert.alert(error instanceof Error ? error.message : "Unknown error occurred!")
  }
};
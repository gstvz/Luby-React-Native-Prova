import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "@shared/services";
import { Alert } from "react-native";

export const resetPassword = async (userEmail: { email: string }) => {
  try {
    Alert.alert("Sending link...")
    const response = await api.post("reset", userEmail);

    if(response.status === 200) {
      Alert.alert("Link sent 👌");
    }

    AsyncStorage.setItem('resetToken', JSON.stringify(response.data.token));
  
    return response;
  } catch (error) {
    Alert.alert(error instanceof Error ? error.message : "Unknown error occurred!")
  }
};

import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "@shared/services";
import { Alert } from "react-native";

export const changePassword = async (newPassword: { password: string }) => {
  try {
    Alert.alert("Reset password", "Resetting password...");
    const resetToken = await AsyncStorage.getItem("resetToken");
    const token = JSON.parse(resetToken!);

    const response = await api.post(`reset/${token}`, newPassword);

    if(response.status === 200) {
      Alert.alert("Reset password", "Password reset 👌");
    };
  
    return response;
  } catch (error) {
    Alert.alert(error instanceof Error ? error.message : "Unknown error occurred!")
  }
};

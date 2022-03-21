import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "@shared/services";
import { Alert } from "react-native";

export const resetPassword = async (userEmail: { email: string }) => {
  try {
    Alert.alert("Reset password", "Sending link...")
    const response = await api.post("reset", userEmail);

    if(response.status === 200) {
      Alert.alert("Reset password", "Link sent 👌");
    }

    AsyncStorage.setItem('resetToken', JSON.stringify(response.data.token));
  
    return response;
  } catch (error: any) {
    if(error.status === 404) {
      Alert.alert("Reset Password", "User not found in our database!");
    } else {
      Alert.alert("Reset Password", "Something went wrong! Please, try again!");
    }
  }
};

import { api } from "@shared/services";
import { Alert } from "react-native";

export type UserData = {
  name: string;
  email: string;
  password: string;
};

export const registerUser = async (userData: UserData) => {
  try {
    const response = await api
      .post("user/create", userData)

    if(response.status === 200) {
      Alert.alert("User registered!");
    }

    return response;
  } catch (error) {
    Alert.alert(error instanceof Error ? error.message : "Unknown error occurred!")
  }
};
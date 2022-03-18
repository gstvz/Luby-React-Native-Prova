import { api } from "@shared/services";
import { Alert } from "react-native";

type UserData = {
  name: string;
  email: string;
  password: string;
};

export const registerUser = async (userData: UserData) => {
  try {
    const response = await api
      .post("user/create", userData)

    if(response.status === 200) {
      Alert.alert("Register User", "User registered! 👌");
    }

    return response;
  } catch (error) {
    Alert.alert(error instanceof Error ? error.message : "Unknown error occurred!")
  }
};
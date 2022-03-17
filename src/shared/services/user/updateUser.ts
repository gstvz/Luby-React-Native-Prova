import { api } from "@shared/services";
import { Alert } from "react-native";

type UserData = {
  name: string;
  email: string;
};

export const updateUser = async (userData: UserData) => {
  try {
    const response = await api.put("/user/update", userData);

    if (response.status === 200) {
      Alert.alert("User updated!");
    }

    return response;
  } catch (error) {
    Alert.alert(
      error instanceof Error ? error.message : "Unknown error occurred!"
    );
  }
};

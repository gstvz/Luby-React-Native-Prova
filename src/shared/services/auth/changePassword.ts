import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "@shared/services";
import { Alert } from "react-native";

type ChangePasswordProps = {
  newPassword: { password: string };
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const changePassword = async ({
  newPassword,
  setIsLoading,
}: ChangePasswordProps) => {
  try {
    Alert.alert("Reset password", "Resetting password...");
    const resetToken = await AsyncStorage.getItem("resetToken");
    const token = JSON.parse(resetToken!);

    const response = await api.post(`reset/${token}`, newPassword);

    if (response.status === 200) {
      Alert.alert("Reset password", "Password reset 👌");
    }

    return response;
  } catch (error: any) {
    if (error.status === 404) {
      Alert.alert(
        "Reset Password",
        "User not found in our database!",
        [
          {
            text: "OK",
            onPress: () => {
              setIsLoading(false);
            },
          },
        ],
        {
          cancelable: true,
        }
      );
    } else {
      Alert.alert(
        "Reset Password",
        "Something went wrong! Please, try again!",
        [
          {
            text: "OK",
            onPress: () => {
              setIsLoading(false);
            },
          },
        ],
        {
          cancelable: true,
        }
      );
    }
  }
};

import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "@shared/services";
import { Alert } from "react-native";

type ResetPasswordProps = {
  userEmail: { email: string },
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const resetPassword = async ({ userEmail, setIsLoading }: ResetPasswordProps) => {
  try {
    Alert.alert("Reset password", "Sending link...");
    const response = await api.post("reset", userEmail);

    if (response.status === 200) {
      Alert.alert("Reset password", "Link sent 👌");
    }

    AsyncStorage.setItem("resetToken", JSON.stringify(response.data.token));

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

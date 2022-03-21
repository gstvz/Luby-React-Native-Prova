import { api } from "@shared/services";
import { Alert } from "react-native";

type RegisterUserProps = {
  user: {
    name: string;
    email: string;
  };
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const updateUser = async ({ user, setIsLoading }: RegisterUserProps) => {
  try {
    const response = await api.put("/user/update", user);

    if (response.status === 200) {
      Alert.alert("Update Account", "Account updated! 👌", [
        {
          text: "OK",
          onPress: () => {
            setIsLoading(false);
          }
        }
      ]);
    }

    return response;
  } catch (error: any) {
    Alert.alert(
      "Update User",
      "Could not update the account information! Please, try again!",
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
};

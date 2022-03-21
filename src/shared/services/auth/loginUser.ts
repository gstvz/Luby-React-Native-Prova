import { Alert } from "react-native";
import { LoginData } from "@shared/types";
import { api } from "@shared/services";

type LoginUserProps = {
  loginData: LoginData;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const loginUser = async ({
  loginData,
  setIsLoading,
}: LoginUserProps) => {
  try {
    const response = await api.post("login", loginData).then((res) => {
      return {
        id: res.data.user.id,
        name: res.data.user.name,
        email: res.data.user.email,
        token: res.data.token.token,
        expires_at: res.data.token.expires_at,
      };
    });

    return response;
  } catch (error: any) {
    if (error.status === 401) {
      Alert.alert(
        "User Login",
        "Invalid email or password!",
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
        "User Login",
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

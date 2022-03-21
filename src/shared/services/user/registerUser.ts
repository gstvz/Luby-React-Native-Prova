import { api } from "@shared/services";
import { Alert } from "react-native";

type RegisterUserProps = {
  user: {
    name: string;
    email: string;
    password: string;
  }
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const registerUser = async ({ user, setIsLoading }: RegisterUserProps) => {
  try {
    const response = await api
      .post("user/create", user)

    if(response.status === 200) {
      Alert.alert("Register User", "User registered! 👌");
    }

    return response;
  } catch (error: any) {
    if(error.status === 400) {
      Alert.alert(
        "Register User",
        "This user is already registered!",
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
        "Register User",
        "Could not register the user! Please, try again!",
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
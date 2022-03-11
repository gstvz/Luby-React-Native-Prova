import { Alert } from "react-native";
import { LoginData } from "../../types/user";
import { api } from "../api";

export const loginUser = async (loginData: LoginData) => {
  try {
    const response = await api
    .post("login", loginData)
    .then((res) => { 
      return {
        id: res.data.user.id,
        email: res.data.user.email,
        token: res.data.token.token,
        expires_at: res.data.token.expires_at,
      }})
    .catch((err) => {
      if(err.response.status === 401) {
        Alert.alert("Invalid email or password.");
      } 
    })

    return response;
  } catch (error) {
    Alert.alert(error instanceof Error ? error.message : "Unknown error occurred!")
  }
};
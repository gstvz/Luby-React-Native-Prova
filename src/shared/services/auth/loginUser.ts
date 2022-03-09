import { api } from "../api";

export type LoginData = {
  email?: string;
  password?: string;
};

export const loginUser = async (loginData: LoginData) => {
  const response = await api
    .post("login", loginData)
    .then((res) => {
      return {
        id: res.data.user.id,
        email: res.data.user.email,
        token: res.data.token.token,
        expires_at: res.data.token.expires_at,
      };
    })

    return response; 
};
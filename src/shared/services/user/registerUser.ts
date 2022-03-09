import { api } from "../api";

export type UserData = {
  name: string;
  email: string;
  password: string;
};

export const registerUser = async (userData: UserData) => {
  const response = await api
    .post("user/create", userData)
};
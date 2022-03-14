import { api } from "@shared/services";

export const resetPassword = async (userEmail: { email: string }) => {
  const response = await api.post("reset", userEmail).then((res) => {
    return res.data.token;
  });

  return response;
};
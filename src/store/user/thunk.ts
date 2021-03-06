import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginUser } from "@shared/services/auth";
import { listBet } from "@shared/services/bets";
import { LoginData } from "@shared/types";
import { userActions } from "./";

type PostUserDataProps = {
  loginData: LoginData,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const postUserData = ({ loginData, setIsLoading }: PostUserDataProps) => {
  return async (dispatch: Function) => {
    const userData = await loginUser({ loginData: loginData, setIsLoading: setIsLoading});    

    if (userData) {
      dispatch(userActions.authenticateUser(userData));
      AsyncStorage.setItem("token", JSON.stringify(userData.token));
    }
  };
};

export const getUserBets = (params: string) => {
  return async (dispatch: Function) => {
    const bets = await listBet(params);
    dispatch(userActions.setUserBets(bets));
  };
};

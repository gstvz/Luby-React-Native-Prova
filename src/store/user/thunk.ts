import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser } from "@shared/services/auth/loginUser";
import { listBet } from "@shared/services/bets/listBet";
import { LoginData } from "@shared/types/user";
import { userActions } from "./userSlice";

export const postUserData = (loginData: LoginData) => {
  return async (dispatch: Function) => {
    const userData = await loginUser(loginData);

    if(userData) {
      dispatch(userActions.authenticateUser(userData));
      AsyncStorage.setItem('token', JSON.stringify(userData.token));
    }
  }
}

export const getUserBets = () => {
  return async (dispatch: Function) => {
    const bets = await listBet();
    dispatch(userActions.setUserBets(bets));
  }
}
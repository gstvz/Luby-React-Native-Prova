import { loginUser } from "../../shared/services/auth/loginUser";
import { LoginData } from "../../shared/types/user";
import { userActions } from "./userSlice";

export const postUserData = (loginData: LoginData) => {
  return async (dispatch: Function) => {
    const userData = await loginUser(loginData);

    if(userData) {
      dispatch(userActions.authenticateUser(userData));
    }
  }
}
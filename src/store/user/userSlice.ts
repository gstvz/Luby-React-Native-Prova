import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../shared/types/user";

const initialState: UserData = {
  user: null,
  userBets: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticateUser(state, action) {
      const user = {
        id: action.payload.id,
        email: action.payload.email,
        token: action.payload.token,
        expires_at: action.payload.expires_at
      };
      state.user = user;
    },
    setUserBets(state, action) {
      state.userBets = action.payload;
    }
  }
})

export const userActions = userSlice.actions;
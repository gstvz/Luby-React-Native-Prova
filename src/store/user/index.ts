import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "@shared/types";

const initialState: UserData = {
  user: null,
  userBets: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authenticateUser(state, action) {
      const user = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
        expires_at: action.payload.expires_at,
      };
      state.user = user;
    },
    logoutUser(state) {
      state.user = null;
    },
    setUserBets(state, action) {
      state.userBets = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

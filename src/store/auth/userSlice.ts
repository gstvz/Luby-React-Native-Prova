import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../shared/types/user";

const initialState: UserData = {
  isAuthenticated: false,
  user: {
    id: null,
    email: null,
    token: null,
    expires_at: null,
  },
  userBets: [
    {
      choosen_numbers: "",
      created_at: "",
      game_id: 0,
      id: 0,
      price: 0,
      type: { id: 0, type: ""},
      user_id: 0,
    }
  ]  
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

      state.isAuthenticated = true;
      state.user = user;
    }
  }
})

export const userActions = userSlice.actions;
import { configureStore } from "@reduxjs/toolkit";
import { gamesSlice } from "./games/gamesSlice";
import { userSlice } from "./user/userSlice";

export const store = configureStore({
  reducer: { user: userSlice.reducer, games: gamesSlice.reducer },
});
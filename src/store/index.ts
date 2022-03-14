import { configureStore } from "@reduxjs/toolkit";
import { gamesSlice } from "./games";
import { userSlice } from "./user";

export const store = configureStore({
  reducer: { user: userSlice.reducer, games: gamesSlice.reducer },
});
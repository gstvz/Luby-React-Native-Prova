import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart";
import { gamesSlice } from "./games";
import { userSlice } from "./user";

export const store = configureStore({
  reducer: { user: userSlice.reducer, games: gamesSlice.reducer, cart: cartSlice.reducer },
});
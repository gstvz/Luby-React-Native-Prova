import { createSlice } from "@reduxjs/toolkit";
import { GameData } from "@shared/types";

const initialState: GameData = {
  min_cart_value: 0,
  types: []
}

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    getGames(state, action) {
      state.min_cart_value = action.payload.min_cart_value;
      state.types = action.payload.types;
    }
  }
})

export const gamesActions = gamesSlice.actions;
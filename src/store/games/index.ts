import { createSlice } from "@reduxjs/toolkit";
import { GameData } from "@shared/types";

const initialState: GameData = {
  min_cart_value: 0,
  types: [],
  activeGame: {
    id: 0,
    type: "",
    description: "",
    range: 0,
    price: 0,
    max_number: 0,
    color: ""
  },
  selectedNumbers: []
}

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    getGames(state, action) {
      state.min_cart_value = action.payload.min_cart_value;
      state.types = action.payload.types;
      state.activeGame = action.payload.types[0];
    },
    setActiveGame(state, action) {
      state.activeGame = action.payload.selectedGame;
    },
    setSelectedNumbers(state, action) {
      state.selectedNumbers = action.payload.selectedNumbers;
    }
  }
})

export const gamesActions = gamesSlice.actions;
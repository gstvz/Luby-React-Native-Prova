import { createSlice } from "@reduxjs/toolkit";
import { GameType } from "@shared/types";
import { Bets } from "@shared/types/cart";

const initialState: Bets = {
  bets: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addGameToCart(state, action) {
      state.bets = [...state.bets, action.payload];
    },
    calculateCartTotal(state, action) {
      const prevBets = [...state.bets];
      const newTotal = prevBets.map((bet) => {
        const betType = action.payload.games.find((type: GameType) => type.id === bet.game_id);
        return betType.price;
      }).reduce((acc, cur) => acc + cur, 0);
      state.total = newTotal;
    },
  },
});

export const cartActions = cartSlice.actions;

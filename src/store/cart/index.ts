import { createSlice } from "@reduxjs/toolkit";
import { Bets } from "@shared/types/cart";

const initialState: Bets = {
  bets: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addGameToCart(state, action) {
      state.bets = [...state.bets, action.payload];
    }
  }
})

export const cartActions = cartSlice.actions;
import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "@shared/types/cart";

const initialState: CartState = {
  cart: {
    games: []
  }
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addGameToCart(state, action) {
      state.cart.games = [...state.cart.games, action.payload];
    }
  }
})

export const cartActions = cartSlice.actions;
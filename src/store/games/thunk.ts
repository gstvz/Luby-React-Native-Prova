import { gamesActions } from "./";
import { listGames } from "@shared/services/games/listGames";

export const getGamesData = () => {
  return async(dispatch: Function) => {
    const gamesData = await listGames();
    
    dispatch(gamesActions.getGames({
        min_cart_value: gamesData?.data.min_cart_value,
        types: gamesData?.data.types
    }))
  }
}
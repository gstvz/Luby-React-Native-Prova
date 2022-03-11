export type GameData = {
  min_cart_value: number,
  types: {
      id: number;
      type: string;
      description: string;
      range: number;
      price: number;
      max_number: number;
      color: string;
    }[]
};

export type GamesState = {
  games: GameData;
}
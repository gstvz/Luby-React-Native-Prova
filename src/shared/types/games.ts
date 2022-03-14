export type GameType = {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
}[]

export type GameData = {
  min_cart_value: number,
  types: GameType
};

export type GamesState = {
  games: GameData;
}
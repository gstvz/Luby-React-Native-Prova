export type Bet = {
  game_id: number;
  numbers: number[];
};

export type Bets = {
  bets: Bet[];
  total: number;
};

export type CartState = {
  cart: Bets;
}
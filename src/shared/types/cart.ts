export type Bet = {
  game_id: number;
  numbers: number[];
};

export type Bets = {
  bets: Bet[];
};

export type CartState = {
  cart: Bets;
}
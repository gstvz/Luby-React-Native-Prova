export type Bet = {
    game_id: string;
    numbers: number[];
};

export type Bets = {
  games: Bet[];
}

export type CartState = {
  cart: Bets;
}
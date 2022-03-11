export type UserData = {
  isAuthenticated: boolean;
  user: {
    id: number | null;
    email: string | null;
    token: string | null;
    expires_at: string | null;
  };
  userBets: UserBets;  
}

export type UserBets = {
  choosen_numbers: string,
  created_at: string;
  game_id: number;
  id: number;
  price: number;
  type: { id: number; type: string };
  user_id: number;
}[];

export type UserState = {
  user: UserData;
}

export type LoginData = {
  email?: string;
  password?: string;
};
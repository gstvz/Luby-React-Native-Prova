export type UserData = {
  user: {
    id: number;
    email: string;
    token: string;
    expires_at: string;
  } | null;
  userBets: UserBets | null;  
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

export type LoginData = {
  email?: string;
  password?: string;
};
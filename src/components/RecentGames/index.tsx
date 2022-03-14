import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GamesState, UserState } from "@shared/types";
import { getGamesData } from "../../store/games/thunk";
import { getUserBets } from "../../store/user/thunk";
import { GamesList, Filter } from "@components";
import * as S from "./styles";

export const RecentGames = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: GamesState) => state.games.types);
  const userBets = useSelector((state: UserState) => state.user.userBets);  

  useEffect(() => {
    dispatch(getGamesData());
  }, []);

  useEffect(() => {
     dispatch(getUserBets());
  });

  return (
    <S.Container>
      <S.Title>RECENT GAMES</S.Title>
      <Filter types={games} />
      <GamesList bets={userBets} />
    </S.Container>
  )
}

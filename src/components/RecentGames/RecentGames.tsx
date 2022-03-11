import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GamesState } from "../../shared/types/games";
import { getGamesData } from "../../store/games/thunk";
import { Filter } from "../Filter/Filter";
import { GamesList } from "../GamesList/GamesList";
import * as S from "./styles";

export const RecentGames = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: GamesState) => state.games);

  useEffect(() => {
    dispatch(getGamesData());
  }, []);  

  return (
    <S.Container>
      <S.Title>RECENT GAMES</S.Title>
      <Filter />
      <GamesList />
    </S.Container>
  )
}

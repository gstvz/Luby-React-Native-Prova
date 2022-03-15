import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GamesState, UserState } from "@shared/types";
import { getGamesData } from "@store/games/thunk";
import { getUserBets } from "@store/user/thunk";
import { GamesList, Filter } from "@components";
import * as S from "./styles";

export const RecentGames = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: GamesState) => state.games.types);
  const userBets = useSelector((state: UserState) => state.user.userBets);
  const [selectedGames, setSelectedGames] = useState<string[]>([]);

  useEffect(() => {
    dispatch(getGamesData());
  }, []);

  useEffect(() => {
    const params = selectedGames.length > 0 ?
      `?type%5B%5D=${selectedGames.join("&type%5B%5D=")}`
      : "";
    dispatch(getUserBets(params));
  }, [selectedGames]);

  return (
    <S.Container>
      <S.Title>RECENT GAMES</S.Title>
      <Filter 
        types={games} 
        selectedGames={selectedGames}
        setSelectedGames={setSelectedGames}
      />
      <GamesList bets={userBets} />
    </S.Container>
  )
}

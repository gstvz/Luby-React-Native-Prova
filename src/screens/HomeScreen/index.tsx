import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GamesState, UserState } from "@shared/types";
import { getGamesData } from "@store/games/thunk";
import { getUserBets } from "@store/user/thunk";
import { Logo, RecentGames } from "@components";
import * as S from "./styles";

export const HomeScreen = () => {
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

  const handleGameFilter = (type: string) => {
    const selectedGame = type;

    if (selectedGames.includes(selectedGame)) {
      setSelectedGames((prevSelectedGames) => {
        return prevSelectedGames.filter((prevSelectedGame) => {
          return prevSelectedGame !== selectedGame;
        });
      });
      return;
    }

    setSelectedGames((prevSelectedGames) => {
      return [...prevSelectedGames, selectedGame];
    });    
  };

  return (
    <S.Container>
      <Logo />
      <RecentGames 
        games={games} 
        selectedGames={selectedGames}
        bets={userBets}
        handleGameFilter={handleGameFilter}
      />
    </S.Container>
  )
}

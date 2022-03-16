import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GamesState, GameType, UserState } from "@shared/types";
import { getGamesData } from "@store/games/thunk";
import { getUserBets } from "@store/user/thunk";
import { Filter, GamesList, Logo } from "@components";
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

  const handleGameFilter = (game: GameType) => {
    const selectedGame = game.type;

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

  const checkIfGameIsActive = (game: GameType) => {
    return selectedGames.includes(game.type);
  }

  return (
    <S.Container>
      <Logo />
      <S.Title>RECENT GAMES</S.Title>
      <Filter 
        title="Filters"
        types={games} 
        handleGameFilter={handleGameFilter}
        isActive={checkIfGameIsActive}
      />
      <GamesList bets={userBets} />
    </S.Container>
  )
}

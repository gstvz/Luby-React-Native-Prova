import { GamesButtons, Logo, NumbersButtons } from "@components";
import { GamesState, GameType } from "@shared/types";
import { gamesActions } from "@store/games";
import { getGamesData } from "@store/games/thunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";

export const BetScreen = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: GamesState) => state.games.types);
  const activeGame = useSelector((state: GamesState) => state.games.activeGame);

  useEffect(() => {
    dispatch(getGamesData());
  }, []);

  const handleGameFilter = (clickedGame: GameType) => {
    const selectedGame = games.find((game) => game.id === clickedGame.id);

    dispatch(gamesActions.setActiveGame({ selectedGame }));
  }

  const checkIfGameIsActive = (game: GameType) => {
    return activeGame.id === game.id;
  }

  return (
    <S.Container>
      <S.Content contentContainerStyle={{
        alignItems: "center"
      }}>
        <Logo />
        <S.Title>
          <S.NewBet>NEW BET </S.NewBet>
          <S.GameName>FOR {activeGame.type.toUpperCase()}</S.GameName>
        </S.Title>
        <GamesButtons
          title="Choose a game"
          types={games}
          handleGameFilter={handleGameFilter}
          isActive={checkIfGameIsActive}
        />
        <S.GameDescription>          
          <S.SubTitle>Fill your bet</S.SubTitle>
          <S.Description>{activeGame.description}</S.Description>
        </S.GameDescription>
        <NumbersButtons range={activeGame.range} />
      </S.Content>
    </S.Container>
  )
}

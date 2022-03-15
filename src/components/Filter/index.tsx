import { GameType } from "@shared/types";
import { SetStateAction } from "react";
import { GameButton } from "../GameButton";
import * as S from "./styles";

type Props = {
  types: GameType;
  selectedGames: string[];
  setSelectedGames: React.Dispatch<SetStateAction<string[]>>;
};

export const Filter = ({ types, selectedGames, setSelectedGames }: Props) => {
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
    <S.FiltersWrapper>
      <S.FiltersTitle>Filters</S.FiltersTitle>
      <S.GameButtonsContainer>
        {types.map((game) => (
          <GameButton
            key={game.id}
            type={game.type}
            color={game.color}
            isActive={selectedGames.includes(game.type)}
            handleButtonClick={() => handleGameFilter(game.type)}
          />
        ))}
      </S.GameButtonsContainer>
    </S.FiltersWrapper>
  );
};

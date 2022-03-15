import { GameType } from "@shared/types";
import { GameButton } from "../GameButton";
import * as S from "./styles";

type Props = {
  types: GameType;
  handleGameFilter: (type: string) => void;
  selectedGames: string[];
};

export const Filter = ({ types, selectedGames, handleGameFilter }: Props) => {
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

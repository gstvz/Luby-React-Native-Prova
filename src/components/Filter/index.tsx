import { GameType } from "@shared/types";
import { GameButton } from "../GameButton";
import * as S from "./styles";

type Props = {
  types: GameType[];
  handleGameFilter: (param: any) => void;
  isActive: (param: any) => boolean;
};

export const Filter = ({ types, handleGameFilter, isActive }: Props) => {
  return (
    <S.FiltersWrapper>
      <S.FiltersTitle>Filters</S.FiltersTitle>
      <S.GameButtonsContainer>
        {types.map((game) => (
          <GameButton
            key={game.id}
            type={game.type}
            color={game.color}
            isActive={isActive(game)}
            handleButtonClick={() => handleGameFilter(game)}
          />
        ))}
      </S.GameButtonsContainer>
    </S.FiltersWrapper>
  );
};

import { GameType } from "@shared/types";
import { GameButton } from "../GameButton";
import * as S from "./styles";

type Props = {
  types: GameType;
};

export const Filter = ({ types }: Props) => {
  return (
    <S.FiltersWrapper>
      <S.FiltersTitle>Filters</S.FiltersTitle>
      <S.GameButtonsContainer>
        {types.map((game) => 
          <GameButton key={game.id} type={game.type} color={game.color} />
        )}
      </S.GameButtonsContainer>
    </S.FiltersWrapper>
  );
};

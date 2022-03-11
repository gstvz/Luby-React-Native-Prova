import { GameButton } from "../GameButton/GameButton";
import * as S from "./styles";

export const Filter = () => {
  return (
    <S.FiltersWrapper>
      <S.FiltersTitle>Filters</S.FiltersTitle>
      <S.GameButtonsContainer>
        <GameButton />
        <GameButton />
        <GameButton />
      </S.GameButtonsContainer>
    </S.FiltersWrapper>
  );
};

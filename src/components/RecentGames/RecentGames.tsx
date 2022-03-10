import { GameButton } from "../GameButton/GameButton";
import * as S from "./styles";

export const RecentGames = () => {
  return (
    <S.Container>
      <S.Title>RECENT GAMES</S.Title>
      <S.FiltersContainer>
        <S.FiltersTitle>Filters</S.FiltersTitle>
        <GameButton />
      </S.FiltersContainer>
    </S.Container>
  )
}

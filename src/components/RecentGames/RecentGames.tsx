import { Filter } from "../Filter/Filter";
import { GamesList } from "../GamesList/GamesList";
import * as S from "./styles";

export const RecentGames = () => {
  return (
    <S.Container>
      <S.Title>RECENT GAMES</S.Title>
      <Filter />
      <GamesList />
    </S.Container>
  )
}

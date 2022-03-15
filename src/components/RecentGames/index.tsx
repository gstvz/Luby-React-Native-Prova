import { GameType, UserBets } from "@shared/types";
import { GamesList, Filter } from "@components";
import * as S from "./styles";

type Props = {
  games:  GameType;
  selectedGames: string[];
  bets: UserBets | null;
  handleGameFilter: (type: string) => void;
}

export const RecentGames = ({ games, selectedGames, bets, handleGameFilter}: Props) => {
  return (
    <S.Container>
      <S.Title>RECENT GAMES</S.Title>
      <Filter 
        types={games} 
        handleGameFilter={handleGameFilter}
        selectedGames={selectedGames}
      />
      <GamesList bets={bets} />
    </S.Container>
  )
}

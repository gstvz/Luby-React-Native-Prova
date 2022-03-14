import { UserBets } from "../../shared/types/user";
import * as S from "./styles";

type Props = {
  bets: UserBets | null
}

export const GamesList = ({ bets }: Props) => {  
  return (
    <S.RecentGamesWrapper>
      <S.RecentGamesList
        showsVerticalScrollIndicator={false}
        data={bets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <S.Game>
            <S.GameNumbers>{item.choosen_numbers}</S.GameNumbers>
            <S.GameDateAndPrice>{item.created_at} - R${item.price}</S.GameDateAndPrice>
            <S.GameName>{item.type.type}</S.GameName>
          </S.Game>
        )}
      />
    </S.RecentGamesWrapper>
  );
};

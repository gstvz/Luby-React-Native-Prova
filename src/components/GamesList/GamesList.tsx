import { formatDate } from "../../shared/helpers/formatDate";
import { formatToBRL } from "../../shared/helpers/formatToBRL";
import { UserBets } from "@types";
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
            <S.GameDateAndPrice>{formatDate(item.created_at)} - {formatToBRL(item.price)}</S.GameDateAndPrice>
            <S.GameName>{item.type.type}</S.GameName>
          </S.Game>
        )}
      />
    </S.RecentGamesWrapper>
  );
};

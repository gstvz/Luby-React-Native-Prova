import { formatDate, formatToBRL } from "@shared/helpers";
import { GamesState, UserBets } from "@shared/types";
import { useSelector } from "react-redux";
import * as S from "./styles";

type Props = {
  bets: UserBets | null
}

export const GamesList = ({ bets }: Props) => {
  const games = useSelector((state: GamesState) => state.games.types);

  return (
    <S.RecentGamesWrapper>
      <S.RecentGamesList
        showsVerticalScrollIndicator={false}
        data={bets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const color = games.find((game) => game.id === item.type.id)!.color;
          return (
            <S.Game borderColor={color}>
              <S.GameNumbers>{item.choosen_numbers}</S.GameNumbers>
              <S.GameDateAndPrice>{formatDate(item.created_at)} - {formatToBRL(item.price)}</S.GameDateAndPrice>
              <S.GameName>{item.type.type}</S.GameName>
            </S.Game>
        )}}
      />
    </S.RecentGamesWrapper>
  );
};

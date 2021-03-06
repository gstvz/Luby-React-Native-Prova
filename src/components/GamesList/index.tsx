import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import * as S from "./styles";
import { formatDate, formatToBRL } from "@shared/helpers";
import { GamesState, UserBets } from "@shared/types";

type Props = {
  bets: UserBets | null;
};

export const GamesList = ({ bets }: Props) => {
  const games = useSelector((state: GamesState) => state.games.types);

  const padNumbers = (numbers: string) => {
    const numbersArray = numbers.split(",").map((number) => number);

    const formattedNumbers: string[] = [];
    for (const number of numbersArray) {
      let formattedNumber: string;
      parseInt(number) < 10
        ? (formattedNumber = String(number).padStart(2, "0"))
        : (formattedNumber = String(number));
      formattedNumbers.push(formattedNumber);
    }

    return formattedNumbers.join(", ");
  };

  return (
    <S.RecentGamesWrapper>
      {bets?.length === 0 ? (
        <S.EmptyList>
          <Entypo name="emoji-sad" size={44} color="red" />
          <S.EmptyListText>{`There are no recent games!`}</S.EmptyListText>
        </S.EmptyList>
      ) : (
        <S.RecentGamesList
          showsVerticalScrollIndicator={false}
          data={bets}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const color = games.find((game) => game.id === item.type.id)!.color;
            return (
              <S.Game borderColor={color}>
                <S.GameNumbers>
                  {padNumbers(item.choosen_numbers)}
                </S.GameNumbers>
                <S.GameDateAndPrice>
                  {formatDate(item.created_at)} - {formatToBRL(item.price)}
                </S.GameDateAndPrice>
                <S.GameName color={color}>{item.type.type}</S.GameName>
              </S.Game>
            );
          }}
        />
      )}
    </S.RecentGamesWrapper>
  );
};

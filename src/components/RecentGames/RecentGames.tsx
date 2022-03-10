import { Text, View } from "react-native";
import { GameButton } from "../GameButton/GameButton";
import * as S from "./styles";

const DATA = [
  {
    numbers: "01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25",
    dateAndPrice: "30/11/2020 - (R$ 2,50)",
    game: "Megasena"
  },
  {
    numbers: "01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25",
    dateAndPrice: "30/11/2020 - (R$ 2,50)",
    game: "Megasena"
  },
  {
    numbers: "01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25",
    dateAndPrice: "30/11/2020 - (R$ 2,50)",
    game: "Megasena"
  },
  {
    numbers: "01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25",
    dateAndPrice: "30/11/2020 - (R$ 2,50)",
    game: "Megasena"
  }
]

export const RecentGames = () => {
  return (
    <S.Container>
      <S.Title>RECENT GAMES</S.Title>
      <S.FiltersWrapper>
        <S.FiltersTitle>Filters</S.FiltersTitle>
        <S.GameButtonsContainer>
          <GameButton />
          <GameButton />
          <GameButton />
        </S.GameButtonsContainer>
      </S.FiltersWrapper>
      <S.RecentGamesWrapper>
        <S.RecentGamesList 
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) => (
            <S.Game>
              <S.GameNumbers>{item.numbers}</S.GameNumbers>
              <S.GameDateAndPrice>{item.dateAndPrice}</S.GameDateAndPrice>
              <S.GameName>{item.game}</S.GameName>
            </S.Game>
          )}
        />
      </S.RecentGamesWrapper>
    </S.Container>
  )
}

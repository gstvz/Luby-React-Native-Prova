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

export const GamesList = () => {
  return (
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
  );
};

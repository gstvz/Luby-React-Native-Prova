import * as S from "./styles";
import { GameType } from "@shared/types";

type Props = {
  title: string;
  types: GameType[];
  handleGameFilter: (param: any) => void;
  isActive: (param: any) => boolean;
};

export const GamesButtons = ({
  title,
  types,
  handleGameFilter,
  isActive,
}: Props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.GameButtonsContainer>
        {types.map((game) => (
          <S.Button
            key={game.id}
            color={game.color}
            isActive={isActive(game)}
            onPress={() => handleGameFilter(game)}
          >
            <S.ButtonTitle color={game.color} isActive={isActive(game)}>
              {game.type}
            </S.ButtonTitle>
          </S.Button>
        ))}
      </S.GameButtonsContainer>
    </S.Container>
  );
};

import * as S from "./styles";

type Props = {
  activeGame: string;
}

export const Bet = ({ activeGame }: Props) => {
  return (
    <S.Container>
      <S.Title>
        <S.NewBet>NEW BET </S.NewBet>
        <S.GameName>FOR {activeGame}</S.GameName>
      </S.Title>
    </S.Container>
  )
}

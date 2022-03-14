import * as S from "./styles";

type Props = {
  type: string;
  color: string;
}

export const GameButton = ({ type, color }: Props) => {
  return (
    <S.Button color={color}>
      <S.ButtonTitle>{type}</S.ButtonTitle>
    </S.Button>
  )
}

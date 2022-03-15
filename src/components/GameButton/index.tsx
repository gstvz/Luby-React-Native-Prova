import * as S from "./styles";

type Props = {
  type: string;
  color: string;
  isActive: boolean;
  handleButtonClick: () => void;
};

export const GameButton = ({ type, color, isActive, handleButtonClick }: Props) => {
  return (
    <S.Button color={color} isActive={isActive} onPress={handleButtonClick}>
      <S.ButtonTitle color={color} isActive={isActive}>{type}</S.ButtonTitle>
    </S.Button>
  );
};

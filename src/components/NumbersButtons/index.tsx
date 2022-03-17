import { useEffect, useState } from "react";
import * as S from "./styles";

type Props = {
  color: string;
  range: number;
  handleNumberButtonClick: (number: number) => void;
  checkIfNumberIsSelected: (number: number) => boolean;
};

type ButtonsArray = {
  number: number;
}[];

export const NumbersButtons = ({
  color,
  range,
  handleNumberButtonClick,
  checkIfNumberIsSelected,
}: Props) => {
  const [numberButtons, setNumberButtons] = useState<ButtonsArray>([]);

  useEffect(() => {
    const createNumberButtonsArray = () => {
      const numbers: ButtonsArray = [];

      for (let number = 1; number <= range; number++) {
        numbers.push({ number: number });
      }

      setNumberButtons(numbers);
    };

    createNumberButtonsArray();
  }, [range]);

  return (
    <S.Container>
      {numberButtons.map((number) => (
        <S.Button
          key={number.number}
          color={color}
          onPress={() => handleNumberButtonClick(number.number)}
          isSelected={checkIfNumberIsSelected(number.number)}
        >
          <S.ButtonValue>{`${number.number}`.padStart(2, "0")}</S.ButtonValue>
        </S.Button>
      ))}
    </S.Container>
  );
};

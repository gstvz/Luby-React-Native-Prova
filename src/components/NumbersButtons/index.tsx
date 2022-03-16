import { useEffect, useState } from "react";
import * as S from "./styles";

type Props = {
  range: number;
}

type ButtonsArray = {
  number: number;
}[]

export const NumbersButtons = ({ range }: Props) => {
  const [numberButtons, setNumberButtons] = useState<ButtonsArray>([]);

  useEffect(() => {
    const createNumberButtonsArray = () => {
      const numbers: ButtonsArray = [];

      for (let number = 1; number <= range; number++) {
        numbers.push({number: number});
      }

      setNumberButtons(numbers);
    };

    createNumberButtonsArray();
  }, [range]);

  return (
    <S.Container>
      {numberButtons.map((number) => (
        <S.Button>
          <S.ButtonValue>{`${number.number}`.padStart(2, "0")}</S.ButtonValue>
        </S.Button>
      ))}
    </S.Container>
  );
};

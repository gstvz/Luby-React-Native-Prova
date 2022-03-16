import { Ionicons } from "@expo/vector-icons";
import * as S from "./styles";

export const GameActions = () => {
  return (
    <S.Container>
      <S.GameButtonsWrapper>
        <S.GameButton>
          <S.GameButtonText>Complete Game</S.GameButtonText>
        </S.GameButton>
        <S.GameButton>
          <S.GameButtonText>Clear Game</S.GameButtonText>
        </S.GameButton>
      </S.GameButtonsWrapper>
      <S.CartButtonWrapper>
        <S.CartButton>
          <Ionicons name="cart-outline" size={26} color="white" />
          <S.CartButtonText>Add to Cart</S.CartButtonText>
        </S.CartButton>
      </S.CartButtonWrapper>
    </S.Container>
  )
}

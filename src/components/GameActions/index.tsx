import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import * as S from "./styles";

type Props = {
  handleCompleteGame: () => void;
  handleClearGame: () => void;
  handleAddGameToCart: () => void;
  isLoading: boolean;
};

export const GameActions = ({
  handleCompleteGame,
  handleClearGame,
  handleAddGameToCart,
  isLoading
}: Props) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.GameButtonsWrapper>
        <S.GameButton onPress={handleCompleteGame}>
          <S.GameButtonText>Complete Game</S.GameButtonText>
        </S.GameButton>
        <S.GameButton onPress={handleClearGame}>
          <S.GameButtonText>Clear Game</S.GameButtonText>
        </S.GameButton>
      </S.GameButtonsWrapper>
      <S.CartButtonWrapper>
        {isLoading ? (
          <S.CartButton disabled>
            <ActivityIndicator size="large" color={theme.colors.background_primary} />
          </S.CartButton>
        ) : (
          <S.CartButton
            onPress={handleAddGameToCart}
          >
            <Ionicons name="cart-outline" size={26} color="white" />
            <S.CartButtonText>Add to Cart</S.CartButtonText>
          </S.CartButton>
        )}
      </S.CartButtonWrapper>
    </S.Container>
  );
};

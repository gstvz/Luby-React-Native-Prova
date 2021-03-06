import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, Alert } from "react-native";
import * as S from "./styles";
import { Logo } from "@components";
import { CartState, GamesState } from "@shared/types";
import { formatNumbers, formatToBRL } from "@shared/helpers";
import { newBet } from "@shared/services/bets";

import { cartActions } from "@store/cart";
import { useState } from "react";
import { useTheme } from "styled-components";

type RootStackParamList = {
  Home: undefined;
};

type Props = DrawerScreenProps<RootStackParamList, "Home">;

export const CartScreen = ({ navigation }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const dispatch = useDispatch();
  const cart = useSelector((state: CartState) => state.cart);
  const games = useSelector((state: GamesState) => state.games);

  const generateKey = (index: number) => {
    return `${index}_${new Date().getTime() + index}`;
  };

  const handleDeleteBet = (numbers: number[], id: number) => {
    Alert.alert(
      "Delete Bet",
      "Are you sure you want to delete this Bet?",
      [
        {
          text: "Yes",
          onPress: () => {
            dispatch(cartActions.removeGameFromCart(numbers));
            dispatch(
              cartActions.calculateCartTotal({
                games: games.types,
              })
            );
            Alert.alert("Delete Bet", "Bet Deleted!");
          },
        },
        {
          text: "Cancel",
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const handleSaveBet = async () => {
    setIsLoading(!isLoading);
    if (cart.total < games.min_cart_value) {
      Alert.alert(
        "Save Bet",
        `The cart hasn't reached the minimum value of ${formatToBRL(
          games.min_cart_value
        )}!`,
        [
          {
            text: "OK",
            onPress: () => {
              setIsLoading(!!isLoading);
            },
          },
        ]
      );
      return;
    }

    const bets = {
      games: cart.bets,
    };

    const response = await newBet(bets);

    if (response?.status === 200) {
      navigation.jumpTo("Home");
      dispatch(cartActions.resetCartState());
    }
    setIsLoading(!!isLoading);
  };

  return (
    <S.Container>
      <S.Content
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <Logo />
        <S.Cart>
          <S.Title>
            <S.TitleText>CART</S.TitleText>
          </S.Title>
          <S.BetsWrapper>
            {cart.bets.length === 0 ? (
              <S.EmptyCart>
                <MaterialCommunityIcons
                  name="cart-remove"
                  size={44}
                  color="red"
                />
                <S.EmptyCartText>The cart is empty!</S.EmptyCartText>
              </S.EmptyCart>
            ) : (
              cart.bets.map((bet, index) => {
                const color = games.types.find(
                  (game) => game.id === bet.game_id
                )!.color;
                const type = games.types.find(
                  (game) => game.id === bet.game_id
                )!.type;
                const price = formatToBRL(
                  games.types.find((game) => game.id === bet.game_id)!.price
                );
                const formattedNumbers = formatNumbers(bet.numbers).join(", ");

                return (
                  <S.BetWrapper key={generateKey(index)}>
                    <S.BetDeleteButton
                      onPress={() => handleDeleteBet(bet.numbers, bet.game_id)}
                    >
                      <Ionicons name="trash-outline" size={26} />
                    </S.BetDeleteButton>
                    <S.Bet color={color}>
                      <S.BetNumbers>{formattedNumbers}</S.BetNumbers>
                      <S.BetGameAndPrice>
                        <S.BetGame color={color}>{type}</S.BetGame>
                        <S.BetPrice>{price}</S.BetPrice>
                      </S.BetGameAndPrice>
                    </S.Bet>
                  </S.BetWrapper>
                );
              })
            )}
          </S.BetsWrapper>
          <S.CartTotalWrapper>
            <S.CartTotal>CART </S.CartTotal>
            <S.CartTotalValue>
              TOTAL: {formatToBRL(cart.total)}
            </S.CartTotalValue>
          </S.CartTotalWrapper>
        </S.Cart>
        {isLoading ? (
          <S.SaveBetButton disabled>
            <ActivityIndicator size="large" color={theme.colors.action} />
          </S.SaveBetButton>
        ) : (
          <S.SaveBetButton onPress={handleSaveBet}>
            <S.SaveBetButtonContent>
              Save
              <Ionicons name="arrow-forward" size={32} />
            </S.SaveBetButtonContent>
          </S.SaveBetButton>
        )}
      </S.Content>
    </S.Container>
  );
};

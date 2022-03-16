import { Ionicons } from "@expo/vector-icons";
import { Logo } from '@components';
import * as S from "./styles";
import { useSelector } from "react-redux";
import { CartState } from "@shared/types/cart";
import { GamesState } from "@shared/types";
import { formatToBRL } from "@shared/helpers";

export const CartScreen = () => {
  const cart = useSelector((state: CartState) => state.cart.bets);
  const games = useSelector((state: GamesState) => state.games.types);

  return (
    <S.Container>      
      <S.Content>
        <Logo />
        <S.Cart>
          <S.Title>
            <S.TitleText>CART</S.TitleText>
          </S.Title>
          <S.BetsWrapper>
            {cart.map((bet) => (
              <S.BetWrapper>
                <S.BetDeleteButton>
                  <Ionicons name="trash-outline" size={26} />
                </S.BetDeleteButton>
                <S.Bet>
                  <S.BetNumbers>{bet.numbers.join(", ")}</S.BetNumbers>
                  <S.BetGameAndPrice>
                    <S.BetGame>{games.find((game) => game.id === bet.game_id)!.type}</S.BetGame>
                    <S.BetPrice>{formatToBRL(games.find((game) => game.id === bet.game_id)!.price)}</S.BetPrice>
                  </S.BetGameAndPrice>
                </S.Bet>
              </S.BetWrapper>
            ))}
          </S.BetsWrapper>
          <S.CartTotalWrapper>
            <S.CartTotal>CART </S.CartTotal>
            <S.CartTotalValue>TOTAL: R$ 10,00</S.CartTotalValue>
          </S.CartTotalWrapper>
        </S.Cart>
        <S.SaveBetButton>
            <S.SaveBetButtonContent>
              Save
              <Ionicons name="arrow-forward" size={32} />
            </S.SaveBetButtonContent>
          </S.SaveBetButton>
      </S.Content>      
    </S.Container>
  )
}

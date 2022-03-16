import { Ionicons } from "@expo/vector-icons";
import { Logo } from '@components';
import * as S from "./styles";

export const CartScreen = () => {
  return (
    <S.Container>      
      <S.Content>
        <Logo />
        <S.Cart>
          <S.Title>
            <S.TitleText>CART</S.TitleText>
          </S.Title>
          <S.BetsWrapper>
            <S.BetWrapper>
              <S.BetDeleteButton>
                <Ionicons name="trash-outline" size={26} />
              </S.BetDeleteButton>
              <S.Bet>
                <S.BetNumbers>1, 2 ,3 ,4 ,5 ,6</S.BetNumbers>
                <S.BetGameAndPrice>
                  <S.BetGame>Lotofácil</S.BetGame>
                  <S.BetPrice>R$ 2,50</S.BetPrice>
                </S.BetGameAndPrice>
              </S.Bet>
            </S.BetWrapper>
            <S.BetWrapper>
              <S.BetDeleteButton>
                <Ionicons name="trash-outline" size={26} />
              </S.BetDeleteButton>
              <S.Bet>
                <S.BetNumbers>1, 2 ,3 ,4 ,5 ,6</S.BetNumbers>
                <S.BetGameAndPrice>
                  <S.BetGame>Lotofácil</S.BetGame>
                  <S.BetPrice>R$ 2,50</S.BetPrice>
                </S.BetGameAndPrice>
              </S.Bet>
            </S.BetWrapper>
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

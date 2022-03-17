import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`

export const Content = styled.ScrollView`
`

export const Title = styled.View`
  alignItems: center;
  marginTop: 10px;
  marginBottom: 10px;
`

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.colors.titles};
  fontFamily: ${({ theme }) => theme.fonts.italic_700};
  fontSize: 30px;
`

export const Cart = styled.View`
  backgroundColor: ${({ theme }) => theme.colors.background_tertiary};
  borderColor: ${({ theme }) => theme.colors.light};
  borderTopLeftRadius: 6px;
  borderTopRightRadius: 6px; 
  borderWidth: 1px;
  marginTop: 10px;
  padding: 10px;
`

export const BetsWrapper = styled.View`
  marginTop: 10px;
`

export const BetWrapper = styled.View`
  alignItems: center;
  flexDirection: row;
  marginLeft: 10px;
  marginBottom: 20px;
`

export const BetDeleteButton = styled.Pressable`
`

export const Bet = styled.View`
  borderLeftColor: ${({ theme }) => theme.colors.action};
  borderLeftWidth: 4px;
  borderRadius: 4px;
  borderStyle: solid;
  marginLeft: 8px;
`

export const BetNumbers = styled.Text`
  color: ${({ theme }) => theme.colors.titles};
  fontFamily: ${({ theme }) => theme.fonts.italic_700};
  fontSize: 16px;
  marginLeft: 10px;
  width: 240px;
`

export const BetGameAndPrice = styled.View`
  flexDirection: row;
`

export const BetGame = styled.Text`
  color: ${({ theme }) => theme.colors.action};
  fontFamily: ${({ theme }) => theme.fonts.italic_700};
  fontSize: 16px;
  marginLeft: 10px;
`

export const BetPrice = styled.Text`
  color: ${({ theme }) => theme.colors.titles};
  fontFamily: ${({ theme }) => theme.fonts.regular_400};
  fontSize: 16px;
  marginLeft: 10px;
`

export const CartTotalWrapper = styled.View`
  flexDirection: row;
  paddingBottom: 20px;
  paddingLeft: 10px;
  paddingTop: 10px;
`

export const CartTotal = styled.Text`
  color: ${({ theme }) => theme.colors.titles};
  fontFamily: ${({ theme }) => theme.fonts.italic_700};
  fontSize: 26px;
`

export const CartTotalValue = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  fontFamily: ${({ theme }) => theme.fonts.italic_400};
  fontSize: 26px;
`

export const SaveBetButton = styled.Pressable` 
  backgroundColor: ${({ theme }) => theme.colors.background_secondary};
  borderBottomLeftRadius: 6px;
  borderBottomRightRadius: 6px;
  borderColor: ${({ theme }) => theme.colors.light};
  borderWidth: 1px;
  flexDirection: row;
  justifyContent: center;
  padding: 16px;
`

export const SaveBetButtonContent = styled.Text`  
  color: ${({ theme }) => theme.colors.action};
  fontFamily: ${({ theme }) => theme.fonts.italic_700};
  fontSize: 30px;
`
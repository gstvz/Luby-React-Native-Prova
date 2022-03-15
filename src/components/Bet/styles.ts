import styled from "styled-components/native";

export const Container = styled.View`
  alignItems: center;
`

export const Title = styled.View`
  alignItems: center;
`

export const NewBet = styled.Text`
  color: ${({ theme }) => theme.colors.titles};
  fontFamily: ${({ theme }) => theme.fonts.italic_700};
  fontSize: 30px;
`

export const GameName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  fontFamily: ${({ theme }) => theme.fonts.italic_400};
  fontSize: 30px;
`
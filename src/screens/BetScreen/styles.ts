import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
`

export const Content = styled.ScrollView`
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

export const GameDescription = styled.View`
  width: 340px;
`

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.titles};
  fontFamily: ${({ theme }) => theme.fonts.italic_700};
  fontSize: 20px;
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  fontFamily: ${({ theme }) => theme.fonts.italic_400};
  fontSize: 20px;
`
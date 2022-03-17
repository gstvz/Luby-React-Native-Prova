import styled from "styled-components/native"

type GameProps = {
  borderColor: string;
}

type GameNameProps = {
  color: string;
}

export const RecentGamesWrapper = styled.View`
  height: 300px;
  marginTop: 10px;
`

export const RecentGamesList = styled.FlatList`
`

export const Game = styled.View<GameProps>`
  borderLeftColor: ${props => props.borderColor};  
  borderLeftWidth: 3px;
  borderRadius: 3px;
  paddingLeft: 8px;
  marginBottom: 12px;
`

export const GameNumbers = styled.Text`
  color: ${props => props.theme.colors.text};
  fontFamily: ${props => props.theme.fonts.italic_700};
  fontSize: 20px;
  margin: 3px;
  width: 340px;
`

export const GameDateAndPrice = styled.Text`
  color: ${props => props.theme.colors.text};
  fontFamily: ${props => props.theme.fonts.regular_400};
  fontSize: 16px;
  margin: 3px;
`

export const GameName = styled.Text<GameNameProps>`
  color: ${({ color }) => color};
  fontFamily: ${props => props.theme.fonts.italic_700};
  fontSize: 20px;
  margin: 3px;
`
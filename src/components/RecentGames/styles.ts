import styled from "styled-components/native";

export const Container = styled.View`
  alignItems: center;
  padding: 20px;
`

export const Title = styled.Text`
  color: ${props => props.theme.colors.titles};
  fontFamily: ${props => props.theme.fonts.italic_700};
  fontSize: 30px;
`

export const Content = styled.View`
  padding: 10px;
`

export const FiltersTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  fontFamily: ${props => props.theme.fonts.italic_400};
  fontSize: 24px;
  textAlign: center;
`

export const GameButtonsContainer = styled.View`
  flexDirection: row;
  flexWrap: wrap;
  justifyContent: space-around;
  marginTop: 10px;
  width: 380px;
`

export const RecentGamesList = styled.FlatList`
  width: 360px;
`

export const Game = styled.View`
  borderLeftColor: #01AC66;
  borderLeftWidth: 2px;
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

export const GameName = styled.Text`
  color: ${props => props.theme.colors.titles};
  fontFamily: ${props => props.theme.fonts.italic_700};
  fontSize: 20px;
  margin: 3px;
`
import styled from "styled-components/native"

export const FiltersWrapper = styled.View`
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



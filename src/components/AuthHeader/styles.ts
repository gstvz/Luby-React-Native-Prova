import styled from "styled-components/native";

export const Container = styled.View`
  alignItems: center;
  padding: 20px; 
`

export const TopTitle = styled.Text`
  color: ${props => props.theme.colors.titles};
  fontFamily: ${props => props.theme.fonts.italic_700};
  fontSize: 40px;
`

export const HighlightedTitle = styled.Text`
  backgroundColor: ${props => props.theme.colors.primary}
  borderRadius: 100px;
  color: #FFF;
  fontFamily: ${props => props.theme.fonts.italic_700};
  fontSize: 20px;
  padding: 2px;
  textAlign: center;
  width: 100px;
`

export const BottomTitle = styled.Text`
  color: ${props => props.theme.colors.titles};
  fontFamily: ${props => props.theme.fonts.italic_700};
  fontSize: 40px;
`

export const ScreenTitle = styled.Text`
  color: ${props => props.theme.colors.titles};
  fontFamily: ${props => props.theme.fonts.italic_700};
  fontSize: 30px;
  padding: 6px;
`
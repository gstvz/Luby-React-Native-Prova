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

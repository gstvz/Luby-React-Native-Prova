import styled from "styled-components/native";

export const Button = styled.View`
  backgroundColor: #01AC66;
  border: 2px solid;
  borderColor: black;
  borderRadius: 100px;
  height: 40px;
  margin: 6px;
  padding: 8px;
  width: 100px;
`

export const ButtonTitle = styled.Text`
  fontFamily: ${props => props.theme.fonts.italic_700}
  textAlign: center;
`
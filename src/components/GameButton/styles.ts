import styled from "styled-components/native";

type ButtonProps = {
  color: string;
}

export const Button = styled.View<ButtonProps>`
  backgroundColor: ${props => props.color};
  border: 2px solid;
  borderColor: ${props => props.color};
  borderRadius: 100px;
  height: 40px;
  margin: 6px;
  padding: 8px;
  width: 100px;
`

export const ButtonTitle = styled.Text`
  color: #fff;
  fontFamily: ${props => props.theme.fonts.italic_700}
  textAlign: center;
`
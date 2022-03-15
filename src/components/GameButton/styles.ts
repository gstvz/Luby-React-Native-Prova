import styled from "styled-components/native";

type ButtonProps = {
  color: string;
  isActive: boolean;
}

type TextProps = {
  color: string;
  isActive: boolean;
}

export const Button = styled.Pressable<ButtonProps>`
  backgroundColor: ${({ isActive, color }) => isActive ? color : "#fff" };
  border: 2px solid;
  borderColor: ${({ color }) => color};
  borderRadius: 100px;
  height: 40px;
  margin: 6px;
  padding: 8px;
  width: 100px;
`

export const ButtonTitle = styled.Text<TextProps>`
  color: ${({ isActive, color }) => isActive ? "#fff" : color};
  fontFamily: ${({ theme }) => theme.fonts.italic_700}
  textAlign: center;
`
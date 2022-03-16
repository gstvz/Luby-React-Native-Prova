import styled from "styled-components/native"

type ButtonProps = {
  color: string;
  isActive: boolean;
}

type TextProps = {
  color: string;
  isActive: boolean;
}

export const Container = styled.View`
  padding: 10px;
`

export const Title = styled.Text`
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

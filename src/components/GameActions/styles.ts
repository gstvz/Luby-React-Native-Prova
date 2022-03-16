import styled from "styled-components/native";

export const Container = styled.View`
  paddingBottom: 30px;
`

export const GameButtonsWrapper = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  marginBottom: 10px;
  width: 320px;
`

export const GameButton = styled.Pressable`
  alignItems: center;
  backgroundColor: ${({ theme }) => theme.colors.background_secondary};
  border: 1px;
  borderColor: ${({ theme }) => theme.colors.action};
  borderRadius: 10px;
  color: ${({ theme }) => theme.colors.action};
  flexDirection: row;
  height: 50px;
  justifyContent: center;
  width: 140px;
`

export const GameButtonText = styled.Text`
  borderColor: ${({ theme }) => theme.colors.action};
  color: ${({ theme }) => theme.colors.action};
`

export const CartButtonWrapper = styled.View`
  alignItems: center;
  marginBottom: 10px;
  width: 320px;
`

export const CartButton = styled.Pressable`
  alignItems: center;
  backgroundColor: ${({ theme }) => theme.colors.action};
  border: 1px;
  borderColor: ${({ theme }) => theme.colors.action};
  borderRadius: 10px;
  color: ${({ theme }) => theme.colors.background_tertiary};
  flexDirection: row;
  height: 50px;
  justifyContent: center;
  width: 140px;
`

export const CartButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.background_tertiary};
  marginLeft: 10px;
`
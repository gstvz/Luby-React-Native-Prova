import styled from "styled-components/native";

export const NumbersWrapper = styled.View`
  flexDirection: row;
  height: 300px;
  marginTop: 10px;
`

export const NumbersList = styled.FlatList`
`

export const Button = styled.Pressable`
  alignItems: center;
  background-color: #ADC0C4;
  border: none;
  borderRadius: 50px;    
  height: 60px;
  justifyContent: center;
  margin: 5px;
  width: 60px;
`

export const ButtonValue = styled.Text`
  color: #ffffff;
  font-size: 20px;
`
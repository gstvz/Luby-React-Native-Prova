import styled from "styled-components/native";

export const Container = styled.View`
  flexDirection: row;
  flexWrap: wrap;
  height: 100%;
  paddingTop: 10px;
  paddingBottom: 60px;
  width: 350px;
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
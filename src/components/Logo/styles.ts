import styled from "styled-components/native";

export const Container = styled.View`
  alignItems: center;
`

/*
  borderBottomColor: ${props => props.theme.colors.primary};
  borderBottomWidth: 3px;
  borderBottomLeftRadius: 6px;
  borderBottomRightRadius: 6px;
*/

export const Title = styled.Text`
  color: ${props => props.theme.colors.titles};
  fontFamily: ${props => props.theme.fonts.italic_700};
  fontSize: 40px;
  marginTop: 8px;
`

export const Line = styled.View`
  backgroundColor: ${props => props.theme.colors.primary};
  borderRadius: 6px;
  height: 6px;
  marginTop: 8px;
  width: 80px;
`
import styled from "styled-components/native";

type ActionButtonTextProps = {
  primary?: boolean,
  titles?: boolean
}

export const Container = styled.View`
marginBottom: 40px;
`

export const Content = styled.View`
  backgroundColor: ${props => props.theme.colors.background_tertiary}
  border: 1px solid #DDDDDD;
  borderRadius: 14px;
  marginBottom: 20px;
  overflow: hidden;
  width: 300px;
`

export const FormInput = styled.TextInput`
  borderBottomColor: #EBEBEB;
  borderStyle: solid;
  borderBottomWidth: 2px;
  color: ${props => props.theme.colors.placeholder}
  fontFamily: ${props => props.theme.fonts.italic_700};
  fontSize: 17px;
  padding: 16px;
`

export const ActionContainer = styled.View`
  backgroundColor: ${props => props.theme.colors.background_tertiary};
  padding: 20px;
`

export const PasswordButton = styled.Text`
  color: #C1C1C1;
  fontFamily: ${props => props.theme.fonts.italic_400};
  marginBottom: 10px;
  textAlign: right;
`

export const ActionButton = styled.Pressable`
  padding: 6px;
`

export const ActionButtonText = styled.Text<ActionButtonTextProps>`
  color: ${props => props.primary ? props.theme.colors.primary : props.theme.colors.titles};
  fontFamily: ${props => props.theme.fonts.italic_700};
  fontSize: 35px;
  textAlign: center;
`

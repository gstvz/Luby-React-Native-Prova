import { Ionicons } from "@expo/vector-icons";
import * as S from "./styles";

type Props = {
  onSignUpPress: () => void;
  onForgotPress: () => void
}

export const AuthForm = ({ onSignUpPress, onForgotPress }: Props) => {
  return (
    <S.Container>
      <S.Content>
        <S.FormInput placeholder="Email" />
        <S.FormInput placeholder="Password" />
        <S.ActionContainer>
          <S.ActionButton onPress={onForgotPress}>
            <S.PasswordButton>I forgot my password</S.PasswordButton>
          </S.ActionButton>
          <S.ActionButton>
            <S.ActionButtonText primary >
              Log In
              <Ionicons name="arrow-forward" size={32} />
            </S.ActionButtonText>
          </S.ActionButton>
        </S.ActionContainer>
      </S.Content>
      <S.ActionButton onPress={onSignUpPress}>
        <S.ActionButtonText titles >
          Sign Up
          <Ionicons name="arrow-forward" size={32} />
        </S.ActionButtonText>
      </S.ActionButton>
    </S.Container>
  );
};

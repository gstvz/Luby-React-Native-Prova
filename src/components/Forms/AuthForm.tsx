import { Ionicons } from "@expo/vector-icons";
import * as S from "./styles";

export const AuthForm = () => {
  return (
    <S.Container>
      <S.Content>
        <S.FormInput placeholder="Email" />
        <S.FormInput placeholder="Password" />
        <S.ActionContainer>
          <S.ActionButton>
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
      <S.ActionButton>
        <S.ActionButtonText titles >
          Sign Up
          <Ionicons name="arrow-forward" size={32} />
        </S.ActionButtonText>
      </S.ActionButton>
    </S.Container>
  );
};

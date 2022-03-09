import { Ionicons } from "@expo/vector-icons";
import * as S from "./styles";

export const RegisterForm = () => {
  return (
    <S.Container >
      <S.Content>
        <S.FormInput placeholder="Name" />
        <S.FormInput placeholder="Email" />
        <S.FormInput placeholder="Password" />
        <S.ActionContainer>
          <S.ActionButton>
            <S.ActionButtonText primary >
              Register
              <Ionicons name="arrow-forward" size={32} />
            </S.ActionButtonText>
          </S.ActionButton>
        </S.ActionContainer>
      </S.Content>
      <S.ActionButton>
        <S.ActionButtonText titles >
          <Ionicons name="arrow-back" size={32} />
          Back
        </S.ActionButtonText>
      </S.ActionButton>
    </S.Container>
  );
};

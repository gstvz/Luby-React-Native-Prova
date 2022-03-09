import { AuthHeader } from "../../components/AuthHeader/AuthHeader";
import { AuthForm } from "../../components/Forms/AuthForm";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { ResetForm } from "../../components/Forms/ResetForm";
import * as S from './styles';

export const AuthScreen = () => {
  return (
    <S.Container>
      <S.Content>
        <AuthHeader screen="Authentication" />
        <AuthForm />
      </S.Content>
    </S.Container>
  );
}

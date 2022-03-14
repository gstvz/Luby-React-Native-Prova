import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthForm, AuthHeader } from "@components";
import * as S from './styles';

type RootStackParamList = {
  Auth: undefined;
  Register: undefined;
  Reset: undefined;
}

type Props = NativeStackScreenProps<RootStackParamList, 'Auth'>;

export const AuthScreen = ({ navigation }: Props) => {

  const handleSignUpNavigate = () => {
    navigation.navigate('Register')
  };

  const handleResetNavigate = () => {
    navigation.navigate('Reset')
  };

  return (
    <S.Container>
      <S.Content>
        <AuthHeader screen="Authentication" />
        <AuthForm onSignUpPress={handleSignUpNavigate} onForgotPress={handleResetNavigate} />
      </S.Content>
    </S.Container>
  );
}

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as S from "./styles";
import { AuthHeader, RegisterForm } from "@components";

type RootStackParamList = {
  Register: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export const RegisterScreen = ({ navigation }: Props) => {
  const handleBackNavigate = (callback: Function) => {
    callback();
    navigation.goBack();
  };

  const handleRegisterNavigate = (callback: Function) => {
    callback();
    navigation.popToTop();
  };

  return (
    <S.Container>
      <S.Content>
        <AuthHeader screen="Registration" />
        <RegisterForm
          onBackPress={handleBackNavigate}
          onRegister={handleRegisterNavigate}
        />
      </S.Content>
    </S.Container>
  );
};

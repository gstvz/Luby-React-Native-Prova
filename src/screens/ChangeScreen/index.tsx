import { AuthHeader, ChangeForm } from "@components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as S from "./styles";

type RootStackParamList = {
  Reset: undefined;
}

type Props = NativeStackScreenProps<RootStackParamList, 'Reset'>;

export const ChangeScreen = ({ navigation }: Props) => {
  const handleBackNavigate = () => {
    navigation.goBack();
  };

  const handleResetNavigate = () => {
    navigation.popToTop();
  }

  return (
    <S.Container>
      <S.Content>
        <AuthHeader screen="Change password" />
        <ChangeForm onBackPress={handleBackNavigate} onReset={handleResetNavigate} />
      </S.Content>
    </S.Container>
  );
};

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthHeader } from "../../components/AuthHeader/AuthHeader";
import { ResetForm } from "../../components/Forms/ResetForm";
import * as S from './styles';

type RootStackParamList = {
  Reset: undefined;
}

type Props = NativeStackScreenProps<RootStackParamList, 'Reset'>;

export const ResetScreen = ({ navigation }: Props) => {

  const handleBackNavigate = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <S.Content>
        <AuthHeader screen="Reset password" />
        <ResetForm onBackPress={handleBackNavigate} />
      </S.Content>
    </S.Container>
  );
}
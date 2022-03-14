import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthHeader, ResetForm } from "@components";
import * as S from "./styles";

type RootStackParamList = {
  Reset: undefined;
  Change: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Reset">;

export const ResetScreen = ({ navigation }: Props) => {
  const handleBackNavigate = () => {
    navigation.goBack();
  };

  const handleSendLink = () => {
    navigation.navigate("Change");
  };

  return (
    <S.Container>
      <S.Content>
        <AuthHeader screen="Reset password" />
        <ResetForm
          onBackPress={handleBackNavigate}
          onSendLink={handleSendLink}
        />
      </S.Content>
    </S.Container>
  );
};

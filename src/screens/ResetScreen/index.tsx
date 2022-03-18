import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as S from "./styles";
import { AuthHeader, ResetForm } from "@components";

type RootStackParamList = {
  Reset: undefined;
  Change: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Reset">;

export const ResetScreen = ({ navigation }: Props) => {
  const handleBackNavigate = (callback: Function) => {
    callback();
    navigation.goBack();
  };

  const handleSendLink = (callback: Function) => {
    callback();
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

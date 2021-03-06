import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as S from "./styles";
import { AuthHeader, ChangeForm } from "@components";

type RootStackParamList = {
  Reset: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Reset">;

export const ChangeScreen = ({ navigation }: Props) => {
  const handleBackNavigate = (callback: Function) => {
    callback();
    navigation.goBack();
  };

  const handleResetNavigate = (callback: Function) => {
    callback();
    navigation.popToTop();
  };

  return (
    <S.Container>
      <S.Content>
        <AuthHeader screen="Change password" />
        <ChangeForm
          onBackPress={handleBackNavigate}
          onReset={handleResetNavigate}
        />
      </S.Content>
    </S.Container>
  );
};

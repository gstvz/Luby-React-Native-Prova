import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as S from "./styles";
import { AccountForm, AuthHeader } from "@components";

type RootStackParamList = {
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const AccountScreen = ({ navigation }: Props) => {
  const handleBackNavigate = (callback: Function) => {
    callback();
    navigation.goBack();
  };

  const handleUpdateNavigate = () => {
    navigation.navigate("Home");
  };

  return (
    <S.Container>
      <S.Content>
        <AuthHeader screen="Account" />
        <AccountForm
          onBackPress={handleBackNavigate}
          onUpdate={handleUpdateNavigate}
        />
      </S.Content>
    </S.Container>
  );
};

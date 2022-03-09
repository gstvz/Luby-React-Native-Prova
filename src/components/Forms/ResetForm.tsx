import { Ionicons } from "@expo/vector-icons";
import * as S from "./styles";

type Props = {
  onBackPress: () => void
}

export const ResetForm = ({ onBackPress }: Props) => {
  return (
    <S.Container>
      <S.Content>
        <S.FormInput placeholder="Email" />
        <S.ActionContainer>
          <S.ActionButton>
            <S.ActionButtonText primary >
              Send link
              <Ionicons name="arrow-forward" size={32} />
            </S.ActionButtonText>
          </S.ActionButton>
        </S.ActionContainer>
      </S.Content>
      <S.ActionButton onPress={onBackPress}>
        <S.ActionButtonText titles >
          <Ionicons name="arrow-back" size={32} />
          Back
        </S.ActionButtonText>
      </S.ActionButton>
    </S.Container>
  );
};

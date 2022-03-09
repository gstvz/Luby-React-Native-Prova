import { Ionicons } from "@expo/vector-icons";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./styles";
import { resetSchema } from "../../shared/schemas/resetSchema";
import { resetPassword } from "../../shared/services/auth/resetPassword";

type Props = {
  onBackPress: () => void;
};

type Input = {
  email: string;
};

export const ResetForm = ({ onBackPress }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    resolver: yupResolver(resetSchema),
  });

  const handleReset: SubmitHandler<Input> = async(userEmail) => {
    const response = await resetPassword(userEmail);
    console.warn(response);
    // call reset password service;
    // navigate user to next page to change password;
  }

  return (
    <S.Container>
      <S.Content>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <S.FormInput
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && (
          <S.InvalidFormInput>{errors.email.message}</S.InvalidFormInput>
        )}
        <S.ActionContainer>
          <S.ActionButton onPress={handleSubmit(handleReset)}>
            <S.ActionButtonText primary>
              Send link
              <Ionicons name="arrow-forward" size={32} />
            </S.ActionButtonText>
          </S.ActionButton>
        </S.ActionContainer>
      </S.Content>
      <S.ActionButton onPress={onBackPress}>
        <S.ActionButtonText titles>
          <Ionicons name="arrow-back" size={32} />
          Back
        </S.ActionButtonText>
      </S.ActionButton>
    </S.Container>
  );
};

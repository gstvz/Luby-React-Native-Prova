import { Ionicons } from "@expo/vector-icons";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "../styles";
import { resetSchema } from "@shared/schemas";
import { resetPassword } from "@shared/services/auth";
import { useState } from "react";
import { useTheme } from "styled-components";
import { ActivityIndicator } from "react-native";

type Props = {
  onBackPress: (callback: Function) => void;
  onSendLink: (callback: Function) => void;
};

type Input = {
  email: string;
};

export const ResetForm = ({ onBackPress, onSendLink }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>({
    resolver: yupResolver(resetSchema),
  });

  const handleReset: SubmitHandler<Input> = async (userEmail) => {
    setIsLoading(!isLoading);
    const response = await resetPassword({ userEmail: userEmail, setIsLoading: setIsLoading });
    if (response?.status === 200) {
      onSendLink(reset);
    }
  };

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
          {isLoading ? (
            <S.ActionButton disabled>
              <ActivityIndicator size="large" color={theme.colors.action} />
            </S.ActionButton>
          ) : (
            <S.ActionButton onPress={handleSubmit(handleReset)}>
              <S.ActionButtonText primary>
                Send link
                <Ionicons name="arrow-forward" size={32} />
              </S.ActionButtonText>
            </S.ActionButton>
          )}
        </S.ActionContainer>
      </S.Content>
      <S.ActionButton onPress={() => onBackPress(reset)}>
        <S.ActionButtonText titles>
          <Ionicons name="arrow-back" size={32} />
          Back
        </S.ActionButtonText>
      </S.ActionButton>
    </S.Container>
  );
};

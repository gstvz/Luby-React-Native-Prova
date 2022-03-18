import { Ionicons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as S from "../styles";
import { changeSchema } from "@shared/schemas";
import { changePassword } from "@shared/services/auth";
import { useState } from "react";
import { useTheme } from "styled-components";
import { ActivityIndicator } from "react-native";

type Props = {
  onBackPress: (callback: Function) => void;
  onReset: (callback: Function) => void;
};

type Input = {
  password: string;
};

export const ChangeForm = ({ onBackPress, onReset }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>({
    resolver: yupResolver(changeSchema),
  });

  const handleReset: SubmitHandler<Input> = async (newPassword) => {
    setIsLoading(!isLoading);
    const response = await changePassword(newPassword);
    if (response?.status === 200) {
      onReset(reset);
    }
  };

  return (
    <S.Container>
      <S.Content>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <S.FormInput
              placeholder="New password"
              secureTextEntry
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && (
          <S.InvalidFormInput>{errors.password.message}</S.InvalidFormInput>
        )}
        <S.ActionContainer>
          {isLoading ? (
            <S.ActionButton disabled>
              <ActivityIndicator size="large" color={theme.colors.action} />
            </S.ActionButton>
          ) : (
            <S.ActionButton onPress={handleSubmit(handleReset)}>
              <S.ActionButtonText primary>
                Reset
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

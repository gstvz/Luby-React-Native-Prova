import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Ionicons } from "@expo/vector-icons";
import * as S from "../styles";
import { registerSchema } from "@shared/schemas";
import { registerUser } from "@shared/services/user";
import { useState } from "react";
import { useTheme } from "styled-components";
import { ActivityIndicator } from "react-native";

type Props = {
  onBackPress: (callback: Function) => void;
  onRegister: (callback: Function) => void;
};

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export const RegisterForm = ({ onBackPress, onRegister }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(registerSchema),
  });

  const handleRegister: SubmitHandler<Inputs> = async (registerData) => {
    setIsLoading(!isLoading);
    const response = await registerUser(registerData);

    if (response?.status === 200) {
      onRegister(reset);
    }
  };

  return (
    <S.Container>
      <S.Content>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <S.FormInput
              placeholder="Name"
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && (
          <S.InvalidFormInput>{errors.name.message}</S.InvalidFormInput>
        )}
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
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <S.FormInput
              placeholder="Password"
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
            <S.ActionButton onPress={handleSubmit(handleRegister)}>
              <S.ActionButtonText primary>
                Register
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

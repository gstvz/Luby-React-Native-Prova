import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "../styles";
import { loginSchema } from "@shared/schemas";
import { postUserData } from "@store/user/thunk";
import { ActivityIndicator } from "react-native";
import { useState } from "react";
import { useTheme } from "styled-components/native";

type Props = {
  onSignUpPress: (callback: Function) => void;
  onForgotPress: (callback: Function) => void;
};

type LoginInputs = {
  email: string;
  password: string;
};

export const AuthForm = ({ onSignUpPress, onForgotPress }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin: SubmitHandler<LoginInputs> = async (loginData) => {
    setIsLoading(!isLoading);
    dispatch(postUserData({ loginData: loginData, setIsLoading: setIsLoading}));
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
          <S.ActionButton onPress={() => onForgotPress(reset)}>
            <S.PasswordButton>I forgot my password</S.PasswordButton>
          </S.ActionButton>
          {isLoading ? (
            <S.ActionButton disabled>
              <ActivityIndicator size="large" color={theme.colors.action} />
            </S.ActionButton>
          ) : (
            <S.ActionButton onPress={handleSubmit(handleLogin)}>
              <S.ActionButtonText primary>
                Log In
                <Ionicons name="arrow-forward" size={32} />
              </S.ActionButtonText>
            </S.ActionButton>
          )}
        </S.ActionContainer>
      </S.Content>
      <S.ActionButton onPress={() => onSignUpPress(reset)}>
        <S.ActionButtonText titles>
          Sign Up
          <Ionicons name="arrow-forward" size={32} />
        </S.ActionButtonText>
      </S.ActionButton>
    </S.Container>
  );
};

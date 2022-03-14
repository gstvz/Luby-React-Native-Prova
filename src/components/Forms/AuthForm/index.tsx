import { Ionicons } from "@expo/vector-icons";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@shared/schemas";
import * as S from "../styles";
import { postUserData } from "../../../store/user/thunk";
import { useDispatch } from "react-redux";

type Props = {
  onSignUpPress: () => void;
  onForgotPress: () => void;
};

type LoginInputs = {
  email: string;
  password: string;
};

export const AuthForm = ({ onSignUpPress, onForgotPress }: Props) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin: SubmitHandler<LoginInputs> = async(loginData) => {
    dispatch(postUserData(loginData));
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
          <S.ActionButton onPress={onForgotPress}>
            <S.PasswordButton>I forgot my password</S.PasswordButton>
          </S.ActionButton>
          <S.ActionButton onPress={handleSubmit(handleLogin)}>
            <S.ActionButtonText primary>
              Log In
              <Ionicons name="arrow-forward" size={32} />
            </S.ActionButtonText>
          </S.ActionButton>
        </S.ActionContainer>
      </S.Content>
      <S.ActionButton onPress={onSignUpPress}>
        <S.ActionButtonText titles>
          Sign Up
          <Ionicons name="arrow-forward" size={32} />
        </S.ActionButtonText>
      </S.ActionButton>
    </S.Container>
  );
};

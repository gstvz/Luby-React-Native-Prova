import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../shared/schemas/registerSchema";
import { Ionicons } from "@expo/vector-icons";
import * as S from "./styles";
import { registerUser } from "../../shared/services/user/registerUser";

type Props = {
  onBackPress: () => void;
};

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export const RegisterForm = ({ onBackPress }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(registerSchema),
  });

  const handleRegister: SubmitHandler<Inputs> = async(registerData) => {
    const response = await registerUser(registerData);
    // dispatch action that fires registerUser;
    // navigate user back to auth screen;
  }

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
          <S.ActionButton onPress={handleSubmit(handleRegister)}>
            <S.ActionButtonText primary>
              Register
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

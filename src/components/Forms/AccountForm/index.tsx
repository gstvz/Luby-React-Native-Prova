import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Ionicons } from "@expo/vector-icons";
import * as S from "../styles";
import { updateSchema } from "@shared/schemas";
import { updateUser } from "@shared/services/user";
import { UserState } from "@shared/types";
import { useSelector } from "react-redux";
import { ActivityIndicator } from "react-native";
import { useState } from "react";
import { useTheme } from "styled-components/native";

type Props = {
  onBackPress: (callback: Function) => void;
  onUpdate: () => void;
};

type Inputs = {
  name: string;
  email: string;
};

export const AccountForm = ({ onBackPress, onUpdate }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const user = useSelector((state: UserState) => state.user.user);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: user!.name,
      email: user!.email,
    },
    resolver: yupResolver(updateSchema),
  });

  const handleRegister: SubmitHandler<Inputs> = async (updateData) => {
    setIsLoading(!isLoading);
    const response = await updateUser(updateData);

    if (response?.status === 200) {
      onUpdate();
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
        <S.ActionContainer>
          {isLoading ? (
            <S.ActionButton disabled>
              <ActivityIndicator size="large" color={theme.colors.action} />
            </S.ActionButton>
          ) : (
            <S.ActionButton onPress={handleSubmit(handleRegister)}>
              <S.ActionButtonText primary>
                Update
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

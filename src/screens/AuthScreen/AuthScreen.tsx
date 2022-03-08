import { View } from "react-native";
import { AuthHeader } from "../../components/AuthHeader/AuthHeader";
import { AuthForm } from "../../components/Forms/AuthForm";

export const AuthScreen = () => {
  return (
    <View style={{
      alignItems: "center",
      padding: 24
    }}>
      <AuthHeader screen="Authentication" />
      <AuthForm />
    </View>
  );
}

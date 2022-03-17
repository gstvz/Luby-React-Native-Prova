import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AuthScreen,
  ChangeScreen,
  RegisterScreen,
  ResetScreen,
} from "@screens";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Reset" component={ResetScreen} />
      <Stack.Screen name="Change" component={ChangeScreen} />
    </Stack.Navigator>
  );
};

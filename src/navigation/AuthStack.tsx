import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthScreen } from "../screens/AuthScreen/AuthScreen";
import { RegisterScreen } from "../screens/RegisterScreen/RegisterScreen";
import { ResetScreen } from "../screens/ResetScreen/ResetScreen";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen 
        name="Auth" 
        component={AuthScreen}
      />
      <Stack.Screen 
        name="Register" 
        component={RegisterScreen}
      />
      <Stack.Screen 
        name="Reset" 
        component={ResetScreen}
      />
    </Stack.Navigator>
  );
};

import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { UserState } from "@shared/types";
import { AuthStack } from "./AuthStack";
import { AppDrawer } from "./AppDrawer";

export const Container = () => {
  const isUserLoggedIn = useSelector((state: UserState) => state.user.user);

  return (
    <NavigationContainer>
      {isUserLoggedIn ? <AppDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
};

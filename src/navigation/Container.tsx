import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import { AppDrawer } from './AppDrawer';
import { useSelector } from 'react-redux';
import { UserState } from '@types';

export const Container = () => {
  const isUserLoggedIn = useSelector((state: UserState) => state.user.user);

  return (
    <NavigationContainer>
      {isUserLoggedIn ? <AppDrawer /> : <AuthStack />}
    </NavigationContainer>
  )
}

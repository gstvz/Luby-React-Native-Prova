import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import { AppDrawer } from './AppDrawer';
import { useSelector } from 'react-redux';
import { UserState } from '../shared/types/user';

export const Container = () => {
  const isAuthenticated = useSelector((state: UserState) => state.user.isAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppDrawer /> : <AuthStack />}
    </NavigationContainer>
  )
}

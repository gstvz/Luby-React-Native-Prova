import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import { AppDrawer } from './AppDrawer';

export const Container = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}

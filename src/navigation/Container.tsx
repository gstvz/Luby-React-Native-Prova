import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';

export const Container = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}

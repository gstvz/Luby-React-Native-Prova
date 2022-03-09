import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import { Container } from "./src/navigation/Container";
import { theme } from "./src/shared/styles/theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container />
    </ThemeProvider>
  );
}



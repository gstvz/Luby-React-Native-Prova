import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Container } from "./src/navigation/Container";
import { theme } from "./src/shared/styles/theme";
import { store } from "./src/store/store";

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container />      
      </ThemeProvider>
    </Provider>
  );
}



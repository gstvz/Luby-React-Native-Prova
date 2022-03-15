import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen, BetScreen } from "@screens";
const Drawer = createDrawerNavigator();

export const AppDrawer = () => {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center"
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
      />
      {/* <Drawer.Screen name="Account" component={} /> */}
      <Drawer.Screen name="Bet" component={BetScreen} />
      {/*<Drawer.Screen name="Cart" component={} /> */}
    </Drawer.Navigator>
  );
};

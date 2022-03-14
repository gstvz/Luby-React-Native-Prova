import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "@screens";
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
      {/* <Drawer.Screen name="Account" screen={} />
      <Drawer.Screen name="Bet" screen={} />
      <Drawer.Screen name="Cart" screen={} /> */}
    </Drawer.Navigator>
  );
};

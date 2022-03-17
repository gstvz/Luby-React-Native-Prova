import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useDispatch } from "react-redux";
import { HomeScreen, BetScreen, CartScreen } from "@screens";
import { userActions } from "@store/user";

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {
  const dispatch = useDispatch();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center",
      }}
      drawerContent={(props) => (
        <DrawerContentScrollView>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Log out"
            onPress={() => dispatch(userActions.logoutUser())}
          />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      {/* <Drawer.Screen name="Account" component={} /> */}
      <Drawer.Screen name="Bet" component={BetScreen} />
      <Drawer.Screen name="Cart" component={CartScreen} />
    </Drawer.Navigator>
  );
};

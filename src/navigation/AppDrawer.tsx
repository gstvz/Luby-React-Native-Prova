import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useDispatch } from "react-redux";
import { HomeScreen, BetScreen, CartScreen, AccountScreen } from "@screens";
import { userActions } from "@store/user";
import { gamesActions } from "@store/games";
import { cartActions } from "@store/cart";

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userActions.logoutUser());
    dispatch(gamesActions.resetGamesState());
    dispatch(cartActions.resetCartState());
  }

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
            onPress={handleLogout}
          />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen name="Bet" component={BetScreen} />
      <Drawer.Screen name="Cart" component={CartScreen} />
    </Drawer.Navigator>
  );
};

import React from "react";
import { StyleSheet, Image } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import { WishlistScreen } from "../screens/WishlistScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const NavBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let icon;
            if (route.name === "Home") {
              icon = focused
                ? require("../images/home_icon.png")
                : require("../images/home_n_icon.png");
            } else if (route.name === "Wishlist") {
              icon = focused
                ? require("../images/wishlist_icon.png")
                : require("../images/wishlist_n_icon.png");
            }
            return <Image source={icon} style={styles.tabIcon} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Wishlist" component={WishlistScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  image: { resizeMode: "cover", height: "75%", width: "100%" },
  tabIcon: { width: 30, height: 30 },
});
export default NavBar;

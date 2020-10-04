import React from 'react';
import { StyleSheet, Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import WishlistScreen from '../screens/WishlistScreen';

//try new
import { createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const NavBar = createSwitchNavigator({
	homeStack: createBottomTabNavigator({
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarOptions: {
					activeTintColor: '#1d1d1d',
					style: {
						backgroundColor: '#FFF'
					}
				},
				tabBarIcon: ({ focused }) => {
					let icon =
						focused === true ? require('../images/home_icon.png') : require('../images/home_n_icon.png');
					return <Image source={icon} style={styles.tabIcon} />;
				}
			}
		},
		Wishlist: {
			screen: WishlistScreen,
			navigationOptions: {
				tabBarOptions: {
					activeTintColor: '#1d1d1d',
					style: {
						backgroundColor: '#FFF'
					}
				},
				tabBarIcon: ({ focused }) => {
					let icon =
						focused === true
							? require('../images/wishlist_icon.png')
							: require('../images/wishlist_n_icon.png');
					return <Image source={icon} style={styles.tabIcon} />;
				}
			}
		}
	})
});

const styles = StyleSheet.create({
	image: { resizeMode: 'cover', height: '75%', width: '100%' },
	tabIcon: { width: 30, height: 30 }
});

export default NavBar;

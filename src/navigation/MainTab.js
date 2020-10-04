import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import WishlistScreen from '../screens/WishlistScreen';
import DetailsScreen from '../screens/DetailsScreen';

const HomeStack = createStackNavigator();
const WishlistStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTab = () => (
	<Tab.Navigator initialRouteName="Home" activeColor="#fff" shifting={true} backBehavior={'initialRoute'}>
		<Tab.Screen
			name="Home"
			component={HomeStackScreen}
			options={{
				tabBarLabel: 'Home',
				tabBarColor: '#009387',
				tabBarIcon: ({ color }) => <Icon name="ios-home" color={color} size={26} />
			}}
		/>
		<Tab.Screen
			name="WishList"
			component={WishlistScreen}
			options={{
				tabBarLabel: 'WishList',
				tabBarColor: '#d02860',
				tabBarIcon: ({ color }) => <Icon name="ios-heart" color={color} size={26} />
			}}
		/>
	</Tab.Navigator>
);

const HomeStackScreen = ({ navigation }) => (
	<HomeStack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: '#009387'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}}
	>
		<HomeStack.Screen
			name="Home"
			component={HomeScreen}
			options={{
				title: 'Home',
				headerLeft: () => (
					<Icon.Button
						name="ios-menu"
						size={25}
						backgroundColor="#009387"
						onPress={() => navigation.openDrawer()}
					/>
				)
			}}
		/>
	</HomeStack.Navigator>
);

const WishlistStackScreen = ({ navigation }) => (
	<WishlistStack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: '#d02860'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}}
	>
		<WishlistStack.Screen
			name="Wishlist"
			component={WishlistScreen}
			options={{
				title: 'Wishlist',
				headerLeft: () => (
					<Icon.Button
						name="ios-menu"
						size={25}
						backgroundColor="#d02860"
						onPress={() => navigation.openDrawer()}
					/>
				)
			}}
		/>
	</WishlistStack.Navigator>
);

export default MainTab;

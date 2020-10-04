import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
	<RootStack.Navigator headerMode="none">
		<RootStack.Screen name="SplashScreen" component={SplashScreen} />
		<RootStack.Screen name="LoginScreen" component={LoginScreen} />
		<RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
	</RootStack.Navigator>
);

export default RootStackScreen;

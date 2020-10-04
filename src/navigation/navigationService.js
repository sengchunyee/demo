import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { mainPages } from '../navigation/pageConfig';
import Details from '../screens/DetailsScreen';

const Stack = createStackNavigator();

const createStack = () => (
	<Stack.Navigator headerMode="none">
		<Stack.Screen name="Details" component={Details} />
	</Stack.Navigator>
);

export default createStack;

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { store, appPersist } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './src/screens/Drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import MainTab from './src/navigation/MainTab';
import RootStackScreen from './src/navigation/RootScreenStack';
const Drawer = createDrawerNavigator();

const App = () => {
	return (
		<PaperProvider theme={PaperDarkTheme}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={appPersist}>
					<NavigationContainer theme={DarkTheme}>
						{/* <RootStackScreen /> */}
						<Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
							<Drawer.Screen name="HomeDrawer" component={MainTab} />
						</Drawer.Navigator>
					</NavigationContainer>
				</PersistGate>
			</Provider>
		</PaperProvider>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff'
	}
});

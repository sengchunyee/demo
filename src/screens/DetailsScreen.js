import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = (props) => {
	return (
		<View style={styles.container}>
			<Text>Details Screen</Text>
			<Button title="Go to details screen...again" onPress={() => props.navigation.push('Details')} />
			<Button title="Go to home" onPress={() => props.navigation.navigate('Home')} />
			<Button title="Go back" onPress={() => props.navigation.goBack()} />
		</View>
	);
};

export default DetailsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

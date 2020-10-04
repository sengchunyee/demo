import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Dimensions } from 'react-native';

const MovieCard = ({ thumbnail, title, goTo }) => {
	return (
		<View style={styles.movieCard}>
			<Image
				resizeMode="stretch"
				style={{
					display: 'flex',
					flex: 5,
					height: '100%',
					borderTopLeftRadius: 10,
					borderBottomLeftRadius: 10
				}}
				source={{ uri: thumbnail }}
			/>
			<Text
				style={{
					flex: 5,
					fontSize: 14,
					margin: 10
				}}
			>
				{title}
			</Text>
			<TouchableOpacity
				style={{
					flex: 2,
					height: '100%',
					backgroundColor: '#d92f24',
					justifyContent: 'center',
					borderTopRightRadius: 20,
					borderBottomRightRadius: 20
				}}
				onPress={() => goTo()}
			>
				<Text style={{ fontSize: 30, color: '#fff', alignSelf: 'center' }}>▶</Text>
			</TouchableOpacity>
		</View>
	);
};

const propTypes = {
	thumb: PropTypes.string.isRequired,
	title: PropTypes.string,
	goTo: PropTypes.func
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		display: 'flex',
		flex: 1,
		backgroundColor: '#E5E5E5',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	movieCard: {
		display: 'flex',
		flexDirection: 'row',
		width: Dimensions.get('screen').width - 10,
		backgroundColor: '#fff',
		height: 100,
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 20,
		margin: 8
	}
});

export default MovieCard;

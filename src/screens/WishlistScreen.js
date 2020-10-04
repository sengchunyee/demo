import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { fetchMovies, addToWishList, removeFromWishList } from '../redux/action/movieActions';
import MovieCard from '../component/MovieCard';

export const WishlistScreen = (props) => {
	const { movieReducer, fetchMovies, addToWishList, removeFromWishList } = props;

	const { movies, wishlist } = movieReducer;

	const goTo = () => {
		props.navigation.navigate('Details');
	};
	return (
		<View style={styles.container}>
			<FlatList
				data={wishlist}
				keyExtractor={(item, index) => {
					return index.toString();
				}}
				renderItem={({ item }) => <MovieCard title={item.title} thumbnail={item.thumbnail} goTo={goTo} />}
			/>
		</View>
	);
};

const mapStateToProps = (state) => ({
	movieReducer: state.movieReducer
});

const mapDispatchToProps = { fetchMovies, addToWishList, removeFromWishList };

export default connect(mapStateToProps, mapDispatchToProps)(WishlistScreen);

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		display: 'flex',
		flex: 1,
		backgroundColor: '#E5E5E5',
		alignItems: 'center',
		justifyContent: 'flex-start'
	}
});

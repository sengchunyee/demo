import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchMovies, addToWishList, removeFromWishList } from '../redux/action/movieActions';

const HomeScreen = (props) => {
	const { movieReducer, fetchMovies, addToWishList, removeFromWishList } = props;
	const { movies, wishlist } = movieReducer;
	const [ currentMovie, setCurrentMovie ] = useState(undefined);

	useEffect(() => {
		fetchMovies();
	}, []);

	useEffect(
		() => {
			if (movies.length > 0) {
				setCurrentMovie(movies[0]);
			}
		},
		[ movies ]
	);
	const onTapCurrentMovie = (movie) => {
		setCurrentMovie(movie);
	};

	const onTapAddToWishList = (movie) => {
		addToWishList(movie);
	};

	const onTapRemoveFromWishList = (movie) => {
		removeFromWishList(movie);
	};

	const isExist = (movie) => {
		if (wishlist.filter((item) => item._id === movie._id).length > 0) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.posterView}>
				<View style={{ display: 'flex', flex: 9 }}>
					{currentMovie !== undefined && (
						<ImageBackground
							resizeMode="stretch"
							style={styles.poster}
							imageStyle={{
								borderBottomLeftRadius: Dimensions.get('screen').width / 3,
								marginBottom: 30
							}}
							source={{
								uri: currentMovie.poster
							}}
						/>
					)}
				</View>
				{currentMovie !== undefined && (
					<View style={{ display: 'flex', flex: 3, alignItems: 'flex-end' }}>
						<TouchableOpacity
							style={{
								position: 'absolute',
								top: -30,
								backgroundColor: '#d92f24',
								width: 200,
								height: 50,
								justifyContent: 'center',
								alignItems: 'center',
								marginLeft: 10,
								borderBottomLeftRadius: 25,
								borderTopLeftRadius: 25
							}}
							onPress={() => props.navigation.push('Details')}
						>
							<Text style={{ color: '#fff', fontSize: 22, fontWeight: '400' }}>Watch Now ▶</Text>
						</TouchableOpacity>
						<View style={{ display: 'flex', flexDirection: 'column', padding: 20 }}>
							<Text
								style={{
									textAlign: 'left',
									color: '#1d1d1d',
									fontSize: 20,
									fontWeight: '600',
									margin: 10
								}}
							>
								{currentMovie.title}
							</Text>
							<Text style={{ color: '#1d1d1d', fontSize: 13 }}>{currentMovie.plot}</Text>
						</View>
					</View>
				)}
			</View>
			<View style={styles.listView}>
				<Text
					style={{
						fontSize: 30,
						fontWeight: '600',
						color: 'gray',
						marginLeft: 20,
						marginBottom: 20
					}}
				>
					Top Movies
				</Text>
				<FlatList
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					data={movies}
					renderItem={({ item }) => (
						<View style={styles.movieCard}>
							<TouchableOpacity
								style={{ flex: 1, justifyContent: 'space-between' }}
								onPress={() => onTapCurrentMovie(item)}
							>
								<Image
									resizeMode="stretch"
									style={{
										display: 'flex',
										width: Dimensions.get('screen').width / 2.5 - 10,
										height: '80%',
										borderTopLeftRadiFus: 20,
										borderTopRightRadius: 20
									}}
									source={{ uri: item.thumbnail }}
								/>
							</TouchableOpacity>
							<Text style={{ textAlign: 'center', padding: 20 }}>{item.title}</Text>
							{isExist(item) ? (
								<TouchableOpacity
									style={{
										backgroundColor: '#d92f24',
										width: '100%',
										justifyContent: 'center',
										alignItems: 'center',
										height: 44,
										borderBottomLeftRadius: 20,
										borderBottomRightRadius: 20
									}}
									onPress={() => onTapRemoveFromWishList(item)}
								>
									<Text style={{ color: '#fff', fontSize: 12, fontWeight: '600' }}>
										Remove from wishlist
									</Text>
								</TouchableOpacity>
							) : (
								<TouchableOpacity
									style={{
										backgroundColor: '#208103',
										width: '100%',
										justifyContent: 'center',
										alignItems: 'center',
										height: 44,
										borderBottomLeftRadius: 20,
										borderBottomRightRadius: 20
									}}
									onPress={() => onTapAddToWishList(item)}
								>
									<Text style={{ color: '#fff', fontSize: 12, fontWeight: '600' }}>
										Add to wishlist
									</Text>
								</TouchableOpacity>
							)}
						</View>
					)}
					keyExtractor={(item, index) => {
						return index.toString();
					}}
				/>
			</View>
		</View>
	);
};

const mapStateToProps = (state) => ({
	movieReducer: state.movieReducer
});

const mapDispatchToProps = { fetchMovies, addToWishList, removeFromWishList };

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		backgroundColor: '#E5E5E5',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	listView: { flex: 5, width: Dimensions.get('screen').width, padding: 10 },
	posterView: {
		display: 'flex',
		flex: 7,
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: Dimensions.get('screen').width
	},
	poster: {
		display: 'flex',
		width: Dimensions.get('screen').width,
		flex: 7,
		height: '100%',
		justifyContent: 'flex-end',
		flexDirection: 'column'
	},
	movieCard: {
		display: 'flex',
		flexDirection: 'column',
		width: Dimensions.get('screen').width / 2.5 - 10,
		backgroundColor: '#fff',
		height: '80%',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: 10,
		borderRadius: 20
	}
});

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import {
  fetchMovies,
  addToWishList,
  removeFromWishList,
} from "../redux/actions";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Home Screen </Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  movieReducer: state.movieReducer,
});

const mapDispatchToProps = { fetchMovies, addToWishList, removeFromWishList };

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

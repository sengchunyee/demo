import axios from "axios";

export const Action = {
  GET_MOVIES: "fetch_movies",
  ADD_TO_WISHLIST: "add_to_wishlist",
  REMOVE_FROM_WISHLIST: "remove_from_wishlist",
  ON_ERROR: "on_error",
};

//get movie list from api
export const fetchMovies = () => {
  try {
    return async (dispatch) => {
      //do api call and dispatch
      const response = await axios.get("apicall");
      if (response.data) {
        dispatch({
          type: Action.GET_MOVIES,
          payload: response.data,
        });
      } else {
        dispatch({
          type: Action.ON_ERROR,
          payload:
            "Failed to update movie list, please check internet connectivity.",
        });
      }
    };
  } catch (err) {
    dispatch({
      type: Action.ON_ERROR,
      payload:
        "Failed to update movie list, please check internet connectivity.",
    });
  }
};

//add movie to wishlist
export const addToWishList = (movie = (dispatch) => {
  dispatch({
    type: Action.ADD_TO_WISHLIST,
    payload: movie,
  });
});

//remove movie from wishlist
export const removeFromWishList = (movie = (dispatch) => {
  dispatch({
    type: Action.REMOVE_FROM_WISHLIST,
    payload: movie,
  });
});

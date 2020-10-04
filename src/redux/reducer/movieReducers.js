import { Action } from '../action/movieActions';

const initialState = {
	movies: [],
	wishlist: [],
	user: [],
	authenticated: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case Action.GET_MOVIES:
			return {
				...state,
				movies: action.payload
			};
		case Action.ADD_TO_WISHLIST:
			return {
				...state,
				wishlist: [ ...state.wishlist, action.payload ]
			};

		case Action.REMOVE_FROM_WISHLIST:
			return {
				...state,
				wishlist: state.wishlist.filter((movie) => movie._id !== action.payload._id)
			};

		case Action.SET_UNAUTHENTICATED:
			return initialState;

		case Action.SET_AUTHENTICATED:
			return { ...state, authenticated: true, user: [ action.payload ] };

		default:
			return { ...state };
	}
}

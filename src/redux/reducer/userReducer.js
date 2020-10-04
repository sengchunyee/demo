import { Action } from '../action/movieActions';

const initialState = {
	authenticated: false,
	credentials: {},
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case Action.SET_AUTHENTICATED:
			return { ...state, authenticated: true };
		case Action.SET_UNAUTHENTICATED:
			return initialState;
		case Action.SET_USER:
			return { authenticated: true, loading: false, ...action.payload };
		case Action.LOADING_USER:
			return { ...state, loading: true };
		default:
			return state;
	}
}

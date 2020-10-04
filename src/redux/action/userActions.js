import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const Action = {
	SET_USER: 'SET_USER',
	SET_UNAUTHENTICATED: 'SET_UNAUTHENTICATED',
	SET_AUTHENTICATED: 'SET_AUTHENTICATED',
	LOADING_USER: 'LOADING_USER'
};

export const loginUser = (userData) => (dispatch) => {
	setAuthorizationHeader('demoToken');
	dispatch(getUserData());
	// dispatch({ type: LOADING_UI });
	// axios
	//   .post("/login", userData)
	//   .then((res) => {
	// setAuthorizationHeader(res.data.token);
	// dispatch(getUserData());
	// dispatch({ type: CLEAR_ERRORS });
	//   })
	//   .catch((err) => {
	// dispatch({ type: SET_ERRORS, payload: err.response.data });
	//   });
};

export const signupUser = (newUserData, history) => (dispatch) => {
	setAuthorizationHeader('demoToken');
	dispatch(getUserData());
	// dispatch({ type: LOADING_UI });
	// axios
	//   .post("/signup", newUserData)
	//   .then((res) => {
	//     setAuthorizationHeader(res.data.token);
	//     dispatch(getUserData());
	//     dispatch({ type: CLEAR_ERRORS });
	//     history.push("/");
	//   })
	//   .catch((err) => {
	//     dispatch({ type: SET_ERRORS, payload: err.response.data });
	//   });
};

export const logoutUser = () => (dispatch) => {
	AsyncStorage.removeItem('idToken');
	// delete axios.defaults.headers.common['Authorization'];
	dispatch({ type: Action.SET_UNAUTHENTICATED });
};

export const getUserData = () => (dispatch) => {
	dispatch({ type: Action.SET_USER, payload: 'demoUserCredentials' });
	// 	dispatch({ type: LOADING_USER });
	// 	axios
	// 		.get('/user')
	// 		.then((res) => {
	// 			dispatch({ type: SET_USER, payload: res.data });
	// 		})
	// 		.catch((err) => console.log(err));
};

const setAuthorizationHeader = (token) => {
	const idToken = `Bearer ${token}`;
	AsyncStorage.setItem('idToken', idToken);
	// 	axios.defaults.headers.common['Authorization'] = idToken;
};

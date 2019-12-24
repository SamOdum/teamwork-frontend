import { SET_CURRENT_USER, AUTH_ERROR, AUTH_LOADING, CLEAR_AUTH_ERROR } from '../actions/types';

const initialState = {
	isAuthenticated: false,
	user: {},
	token: '',
	error: null,
	loading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !!action.payload,
				user: action.payload.user,
				token: action.payload.token,
				loading: false,
			};
		case AUTH_LOADING:
			return {
				...state,
				loading: true,
			};
		case AUTH_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		case CLEAR_AUTH_ERROR:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};

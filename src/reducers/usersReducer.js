import { GET_USERS, USERS_LOADING, USER_ERROR, ADD_USER, CLEAR_USERS_ERROR } from '../actions/types';

const initialState = {
	users: [],
	error: null,
	loading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				loading: false,
				users: action.payload.reverse(),
				error: null,
			};
		case ADD_USER:
			return {
				...state,
				loading: false,
				users: [ action.payload, ...state.users ],
				error: null,
			};
		case USERS_LOADING:
			return {
				...state,
				loading: true,
			};
		case USER_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		case CLEAR_USERS_ERROR:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};

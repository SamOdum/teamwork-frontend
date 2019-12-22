import { USERS_LOADING, GET_USERS, USER_ERROR, ADD_USER, CLEAR_USERS_ERROR } from './types';
import { request, makeUrl } from '../utils';

const setLoading = () => ({ type: USERS_LOADING });
const token = localStorage.getItem('jwtToken');

export const getUsers = () => async (dispatch) => {
	dispatch(setLoading());
	const url = makeUrl('/auth/users');
	const res = await request(url, 'GET', null, token);
	if (res.statusCode !== 200) {
		return dispatch({ type: USER_ERROR, payload: res });
	}
	const { data } = res;
	return dispatch({ type: GET_USERS, payload: data });
};

export const addUser = (userData) => async (dispatch) => {
	const url = makeUrl('/auth/create-user');
	dispatch(setLoading());
	const res = await request(url, 'POST', userData, token);
	if (res.statusCode === 422) {
		const error = Object.values(res.errors).join(',').toString();
		return dispatch({ type: USER_ERROR, payload: error });
	}
	if (res.statusCode !== 201) {
		return dispatch({ type: USER_ERROR, payload: res.error });
	}
	const { data } = res;
	return dispatch({ type: ADD_USER, payload: data });
};

export const clearError = () => (dispatch) => {
	dispatch({ type: CLEAR_USERS_ERROR });
};

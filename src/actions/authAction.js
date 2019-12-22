import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER, AUTH_ERROR, AUTH_LOADING, CLEAR_AUTH_ERROR } from './types';
import { request, makeUrl } from '../utils';

export const loginUser = (userData) => async (dispatch) => {
	const uri = makeUrl('/auth/signin');
	dispatch({ type: AUTH_LOADING });
	const data = await request(uri, 'POST', userData);
	if (data.statusCode !== 200) {
		return dispatch({ type: AUTH_ERROR, payload: data });
	}
	const { data: resPayload } = data;
	const { token } = resPayload;
	localStorage.setItem('jwtToken', token);
	const user = jwtDecode(token);
	return dispatch({ type: SET_CURRENT_USER, payload: { user, token } });
};

export const clearAuthError = () => (dispatch) => {
	dispatch({ type: CLEAR_AUTH_ERROR });
};

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = (props) => {
	const { component: Component, auth, ...rest } = props;
	return (
		<Route
			{...rest}
			render={(items) => (auth.isAuthenticated === true ? <Component {...items} /> : <Redirect to="/" />)}
		/>
	);
};

PrivateRoute.propTypes = {
	auth: PropTypes.shape().isRequired,
	component: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);

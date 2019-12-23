/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Icon, Input, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { loginUser, clearAuthError } from '../../../actions/authAction';

const SignInForm = ({ loginUser: loginAction, clearAuthError: clearAction, auth, history }) => {
	const [ inputs, setInputs ] = useState({
		email: '',
		password: '',
	});

	useEffect(
		() => {
			if (auth.isAuthenticated) {
				history.push('/dashboard');
			}
		},
		[ auth.isAuthenticated, history ],
	);
	const handleChange = (e) => {
		const { value, name } = e.target;
		return setInputs({ ...inputs, [name]: value });
	};
	const handleSubmit = () => {
		if (!inputs.email || !inputs.password) {
			return 'error';
		}
		return loginAction(inputs);
	};
	const { loading, error } = auth;
	return (
		<div className="login-container">
			<h1>
				<Icon name="user circle outline" size="big" /> <br /> Login
			</h1>
			<Form error={!!error} loading={loading} onSubmit={handleSubmit}>
				<Message onDismiss={clearAction} error header="Authentication Error" content="Incorrect email or password" />
				<Form.Field>
					<label>Email</label>
					<Input size="large" iconPosition="left" placeholder="Email">
						<Icon name="at" />
						<input name="email" value={inputs.email} onChange={handleChange} type="email" />
					</Input>
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<Input size="large" iconPosition="left" placeholder="password">
						<Icon name="key" />
						<input name="password" value={inputs.password} onChange={handleChange} type="password" />
					</Input>
				</Form.Field>
				<Button fluid size="large" type="submit">
					Login
				</Button>
			</Form>
		</div>
	);
};

SignInForm.defaultProps = {
	history: {},
};

SignInForm.propTypes = {
	loginUser: PropTypes.func.isRequired,
	clearAuthError: PropTypes.func.isRequired,
	auth: PropTypes.shape().isRequired,
	history: PropTypes.shape(),
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { loginUser, clearAuthError })(SignInForm);

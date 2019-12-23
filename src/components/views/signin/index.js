/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import SignInForm from './SigninForm';
import Aside from './Aside';

const SignIn = ({ history }) => {
	return (
		<Grid verticalAlign="middle">
			<Grid.Row>
				<Grid.Column only="large screen" computer={8}>
					<Aside />
				</Grid.Column>
				<Grid.Column stretched mobile={16} computer={8}>
					<SignInForm history={history} />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

SignIn.propTypes = {
	history: PropTypes.shape().isRequired,
};

export default SignIn;

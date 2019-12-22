import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Input, TextArea, Checkbox, Button, Select, Message } from 'semantic-ui-react';
import { addUser, clearError } from '../../actions/usersAction';

const UserForm = ({ addUser: addUserAction, clearError: clearAction, user }) => {
	const { error, users } = user;
	const [ success, setSuccess ] = useState(false);
	const [ inputs, setInputs ] = useState({
		firstName: '',
		lastName: '',
		password: '',
		gender: '',
		department: '',
		address: '',
		email: '',
		jobRole: '',
		userRole: '',
	});
	const [ checkState, setCheckState ] = useState(false);

	const options = [ { key: 'm', text: 'Male', value: 'male' }, { key: 'f', text: 'Female', value: 'female' } ];

	useEffect(
		() => {
			const lastUser = users[0];
			if (lastUser.email === inputs.email) {
				setInputs({
					firstName: '',
					lastName: '',
					password: '',
					gender: '',
					department: '',
					address: '',
					email: '',
					jobRole: '',
					userRole: '',
				});
				setCheckState(false);
				setSuccess(true);
			}
		},
		// eslint-disable-next-line
		[ user.users ],
	);
	const handleCheck = () => {
		setCheckState(!checkState);
		if (!checkState) {
			return setInputs({ ...inputs, userRole: 'Admin' });
		}
		return setInputs({ ...inputs, userRole: 'Employee' });
	};

	const inputHandler = (e, data = null) => {
		const { value, name } = data == null ? e.target : data;
		return setInputs({ ...inputs, [name]: value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		addUserAction(inputs);
	};

	return (
		<Form error={!!error} success={success} onSubmit={submitHandler} className="add-user-form">
			<Message onDismiss={() => clearAction()} error header="Form Value Error" content={error} />
			<Message onDismiss={() => setSuccess(false)} success header="Successful" content="User Account created" />
			<Form.Group widths="equal">
				<Form.Field
					control={Input}
					autoFocus
					required
					value={inputs.firstName}
					onChange={inputHandler}
					label="First name"
					name="firstName"
					placeholder="First name"
				/>
				<Form.Field
					control={Input}
					required
					value={inputs.lastName}
					onChange={inputHandler}
					name="lastName"
					label="Last name"
					placeholder="Last name"
				/>
				<Form.Field
					control={Select}
					required
					value={inputs.gender}
					onChange={inputHandler}
					name="gender"
					label="Gender"
					options={options}
					placeholder="Gender"
				/>
			</Form.Group>
			<Form.Group widths="equal">
				<Form.Field
					control={Input}
					required
					value={inputs.department}
					onChange={inputHandler}
					name="department"
					label="Department"
					placeholder="Department"
				/>
				<Form.Field
					control={Input}
					required
					value={inputs.jobRole}
					onChange={inputHandler}
					name="jobRole"
					label="Job Role"
					placeholder="Job Role"
				/>
				<Form.Field
					control={Input}
					required
					value={inputs.email}
					onChange={inputHandler}
					name="email"
					type="email"
					label="Email"
					placeholder="Email"
				/>
			</Form.Group>
			<Form.Group widths="equal">
				<Form.Field
					control={TextArea}
					required
					value={inputs.address}
					rows={1}
					onChange={inputHandler}
					name="address"
					label="Address"
					placeholder="Home address"
				/>
				<Form.Field
					control={Input}
					required
					value={inputs.password}
					onChange={inputHandler}
					name="password"
					type="password"
					label="Password"
					placeholder="Password"
				/>
			</Form.Group>
			<Form.Field checked={inputs.checkState} onChange={handleCheck} control={Checkbox} label="Give admin right" />
			<Form.Field control={Button}>Submit</Form.Field>
		</Form>
	);
};

UserForm.propTypes = {
	addUser: PropTypes.func.isRequired,
	clearError: PropTypes.func.isRequired,
	user: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => ({
	user: state.users,
});

export default connect(mapStateToProps, { addUser, clearError })(UserForm);

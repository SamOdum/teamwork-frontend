import React, { useState } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import UserForm from './UserForm';

const CreateUserContainer = () => {
	const [ showForm, setShowForm ] = useState(false);
	return (
		<Grid>
			<Grid.Row>
				<Grid.Column floated="right" width={3}>
					<Button toggle onClick={() => setShowForm(!showForm)}>
						{showForm ? <Icon name="angle down" /> : <Icon name="angle up" />}
						Create Account
					</Button>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row columns={1}>
				<Grid.Column>{showForm && <UserForm />}</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default CreateUserContainer;

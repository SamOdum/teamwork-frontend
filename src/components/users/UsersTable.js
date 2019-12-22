import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Dimmer, Loader, Grid } from 'semantic-ui-react';
import { getUsers } from '../../actions/usersAction';
import { capitalize } from '../../utils';

const UserTable = ({ getUsers: getUsersAction, user }) => {
	useEffect(
		() => {
			getUsersAction();
		},
		[ getUsersAction ],
	);
	const { loading, users } = user;
	return (
		<div>
			{loading ? (
				<Grid columns="1">
					<Grid.Column>
						<Dimmer active inverted>
							<Loader inverted>Loading..</Loader>
						</Dimmer>
					</Grid.Column>
				</Grid>
			) : (
				<Table striped color="blue">
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>First Name</Table.HeaderCell>
							<Table.HeaderCell>Last Name</Table.HeaderCell>
							<Table.HeaderCell>E-mail</Table.HeaderCell>
							<Table.HeaderCell>Department</Table.HeaderCell>
							<Table.HeaderCell>Job Role</Table.HeaderCell>
							<Table.HeaderCell>User Role</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{users.map((item) => {
							return (
								<Table.Row key={item.id}>
									<Table.Cell>{capitalize(item.firstName)}</Table.Cell>
									<Table.Cell>{capitalize(item.lastName)}</Table.Cell>
									<Table.Cell>{item.email}</Table.Cell>
									<Table.Cell>{capitalize(item.department)}</Table.Cell>
									<Table.Cell>{capitalize(item.jobRole)}</Table.Cell>
									<Table.Cell>{capitalize(item.userRole)}</Table.Cell>
								</Table.Row>
							);
						})}
					</Table.Body>
				</Table>
			)}
		</div>
	);
};

UserTable.propTypes = {
	user: PropTypes.shape().isRequired,
	getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	user: state.users,
});
export default connect(mapStateToProps, { getUsers })(UserTable);

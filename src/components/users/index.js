import React from 'react';
import UserTable from './UsersTable';
import AddUserFrom from './AddUserForm';

const Users = () => {
	return (
		<div>
			<h2>Users Panel</h2>
			<AddUserFrom />
			<UserTable />
		</div>
	);
};

export default Users;

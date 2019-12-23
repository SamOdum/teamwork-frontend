import React from 'react';
import Users from './components/users';

// doing this to prevent getting blocked by authentication while making ui
const base = process.env.REACT_APP_HOME;

export default [
	{
		path: `/${base}`,
		exact: true,
		sidebar: () => <div>Feeds</div>,
		content: () => <h2>Feeds page</h2>,
	},
	{
		path: `/${base}/gif`,
		sidebar: () => <div>gifs</div>,
		content: () => <h2>Gifs page</h2>,
	},
	{
		path: `/${base}/article`,
		sidebar: () => <div>Articles</div>,
		content: () => <h2>Article Page</h2>,
	},
	{
		path: `/${base}/profile`,
		sidebar: () => <div>Profiles</div>,
		content: () => <h2>Profile Page</h2>,
	},
	{
		path: `/${base}/users`,
		sidebar: () => <div>Users</div>,
		content: () => <Users />,
	},
];
